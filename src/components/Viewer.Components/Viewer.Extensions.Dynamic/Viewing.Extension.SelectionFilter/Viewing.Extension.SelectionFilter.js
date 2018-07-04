/////////////////////////////////////////////////////////////////
// SelectionFilter Viewer Extension
// By Philippe Leefsma, Autodesk Inc, April 2017
//
/////////////////////////////////////////////////////////////////
import React from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';
import MultiModelExtensionBase from '../../Viewer.Extensions/Viewer.MultiModelExtensionBase';
import WidgetContainer from '../../../WidgetContainer';
import FilterTreeView from './FilterTreeView/index';
import EventTool from '../../Viewer.EventTool';
import Toolkit from '../../Viewer.Toolkit';
import { ReactLoader } from '../../../Loader';

const Autodesk = window.Autodesk;

class SelectionFilterExtension extends MultiModelExtensionBase {
  /////////////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////////////
  constructor(viewer, options) {
    super(viewer, options);

    this.onNodeChecked = this.onNodeChecked.bind(this);

    this.renderTitle = this.renderTitle.bind(this);
    this.handleSearchGuid = this.handleSearchGuid.bind(this);
    this.handleChangeGuidInput = this.handleChangeGuidInput.bind(this);

    this.eventTool = new EventTool(this.viewer);

    this.react = options.react;

    this.leafNodesMap = {};
  }

  /////////////////////////////////////////////////////////
  // Load callback
  //
  /////////////////////////////////////////////////////////
  load() {
    this.react
      .setState({
        models: [],
        searchGuid: ''
      })
      .then(() => {
        this.react.pushRenderExtension(this);

        this.models.forEach(model => {
          if (model.getData().instanceTree) {
            this.addModel(model);
          }
        });
      });

    this.eventTool.on('buttondown', () => {
      this.mouseDown = true;

      return false;
    });

    this.eventTool.on('buttonup', event => {
      this.mouseDown = false;

      return false;
    });

    this.eventTool.on('mousemove', event => {
      // model.rayIntersect cannot be used in this scenario
      // because needs to check for every component
      // for intersection

      // const raycaster = this.pointerToRaycaster(event)
      // const hitTest = this.viewer.model.rayIntersect(
      //   raycaster, true, dbIds)

      if (!this.mouseDown) {
        const hitTest = this.viewer.clientToWorld(
          event.canvasX,
          event.canvasY,
          true
        );

        if (hitTest) {
          const { guid } = hitTest.model;

          return !this.leafNodesMap[guid][hitTest.dbId];
        }
      }

      return false;
    });

    this.viewer
      .loadDynamicExtension('Viewing.Extension.ContextMenu')
      .then(ctxMenuExtension => {
        ctxMenuExtension.on('buildMenu', params => {
          const guid = params.model ? params.model.guid : '';

          const dbId = params.dbId;

          return !dbId || this.leafNodesMap[guid][dbId] ? params.menu : [];
        });
      });

    console.log('Viewing.Extension.SelectionFilter loaded');

    return true;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  get className() {
    return 'selection-filter';
  }

  /////////////////////////////////////////////////////////
  // Extension Id
  //
  /////////////////////////////////////////////////////////
  static get ExtensionId() {
    return 'Viewing.Extension.SelectionFilter';
  }

  /////////////////////////////////////////////////////////
  // Unload callback
  //
  /////////////////////////////////////////////////////////
  unload() {
    console.log('Viewing.Extension.SelectionFilter unloaded');

    this.eventTool.deactivate();

    super.unload();

    return true;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  async addModel(model) {
    const { models } = this.react.getState();

    const guids = models.map(m => {
      return m.guid;
    });

    if (guids.includes(model.guid)) {
      return;
    }

    this.react.setState({
      models: [...models, model]
    });

    this.leafNodesMap[model.guid] = {};

    Toolkit.getLeafNodes(model).then(dbIds => {
      dbIds.forEach(dbId => {
        this.leafNodesMap[model.guid][dbId] = true;
      });
    });

    this.eventTool.activate();
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  onObjectTreeCreated(event) {
    this.addModel(event.model);
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  onSelection(event) {
    if (event.selections.length) {
      const selection = event.selections[0];

      const dbId = selection.dbIdArray[0];

      const model = selection.model;

      if (this.leafNodesMap[model.guid]) {
        if (!this.leafNodesMap[model.guid][dbId]) {
          setTimeout(() => {
            this.viewer.clearSelection();
          }, 300);

          this.viewer.clearSelection();
        }
      }
    }
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  onModelUnloaded(event) {
    const { models } = this.react.getState();

    const model = event.model;

    this.react.setState({
      models: models.filter(m => {
        return m.guid !== model.guid;
      })
    });

    delete this.leafNodesMap[model.guid];
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  onNodeChecked(event) {
    const model = event.model;
    const node = event.node;

    //---- Show or Hide the model
    console.log('model data here');
    console.log(model);
    console.log(node);

    const property = Toolkit.getPropertyList(this.viewer, [node.id], model);
    console.log(property);
    if (node.checked) {
      //Toolkit.show(this.viewer, node.id, model);
      this.viewer.show(node.id, model);
      this.viewer.impl.visibilityManager.setNodeOff(node.id, false, model);
    } else {
      this.viewer.hide(node.id, model);
      this.viewer.impl.visibilityManager.setNodeOff(node.id, true, model);
      //Toolkit.hide(this.viewer, node.id, model);
    }

    Toolkit.getLeafNodes(model, node.id).then(dbIds => {
      dbIds.forEach(dbId => {
        if (node.checked) {
          const leafNode = event.tree.getNodeById(dbId);
          const checked = leafNode ? leafNode.checked : node.checked;
          this.leafNodesMap[model.guid][dbId] = checked;
        } else {
          this.leafNodesMap[model.guid][dbId] = false;
        }
      });
    });
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  async setDocking(docked) {
    const id = SelectionFilterExtension.ExtensionId;

    if (docked) {
      await this.react.popRenderExtension(id);

      this.react.pushViewerPanel(this, {
        height: 250,
        width: 350
      });
    } else {
      await this.react.popViewerPanel(id);

      this.react.pushRenderExtension(this);
    }
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  renderTitle(docked) {
    const spanClass = docked ? 'fa fa-chain-broken' : 'fa fa-chain';

    return (
      <div className="title">
        <label>Selection Filter</label>
        <div className="selection-filter-controls">
          <button
            onClick={() => this.setDocking(docked)}
            title="Toggle docking mode"
          >
            <span className={spanClass} />
          </button>
        </div>
      </div>
    );
  }

  handleChangeGuidInput(event) {
    this.react.setState({ searchGuid: event.target.value });
  }

  handleSearchGuid() {
    const { searchGuid } = this.react.getState();

    const { models } = this.react.getState();
    console.log(this.react.getState());
    models.map(model => {
      const instanceTree = model.getData().instance1Tree;
      const rootID = instanceTree.getRootId();
      console.log('MODEL ROOT ID HERE');
      console.log(rootID);
      this.viewer.hide(rootID, model);
      this.viewer.impl.visibilityManager.setNodeOff(rootID, true, model);
    });

    // Show only current guid
    this.viewer.show(parseInt(searchGuid));
    this.viewer.impl.visibilityManager.setNodeOff(parseInt(searchGuid), false);
  }
  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  renderContent() {
    const { models } = this.react.getState();
    const instanceTreeViews = [];
    models.map(model => {
      let instanceTree = model.getInstanceTree();
      instanceTreeViews.push(instanceTree);
    });
    const treeViews = models.map(model => {
      return (
        <FilterTreeView
          onNodeChecked={this.onNodeChecked}
          viewer={this.viewer}
          key={model.guid}
          model={model}
        />
      );
    });

    return (
      <div className="content">
        <Form inline>
          <FormGroup>
            <Label for="guid" className="mr-sm-2">
              GUID
            </Label>
            <Input
              type="text"
              name="guid"
              id="guid"
              placehold="Search with guid"
              onChange={this.handleChangeGuidInput}
            />
            <Button color="primary" onClick={this.handleSearchGuid}>
              Search
            </Button>
          </FormGroup>
        </Form>
        <ReactLoader show={!models.length} />
        {treeViews}
      </div>
    );
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  render(opts) {
    return (
      <WidgetContainer
        renderTitle={() => this.renderTitle(opts.docked)}
        showTitle={opts.showTitle}
        className={this.className}
      >
        {this.renderContent()}
      </WidgetContainer>
    );
  }
}

Autodesk.Viewing.theExtensionManager.registerExtension(
  SelectionFilterExtension.ExtensionId,
  SelectionFilterExtension
);

export default 'Viewing.Extension.SelectionFilter';
