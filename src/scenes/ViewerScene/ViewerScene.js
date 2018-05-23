import React from 'react';
import Viewer from '../../components/Viewer.Components/Viewer';
import { connect } from 'react-redux';
import qs from 'query-string';
import { setViewerEnv } from '../../modules/Viewer/ViewerAction';
import './ViewerScene.css';

class ViewerScene extends React.Component {
  constructor(props) {
    super(props);
    window.Autodesk = window.Autodesk;
  }

  /////////////////////////////////////////////////////////
  // Initialize viewer environment
  //
  /////////////////////////////////////////////////////////
  initialize(options) {
    return new Promise((resolve, reject) => {
      window.Autodesk.Viewing.Initializer(
        options,
        () => {
          resolve();
        },
        error => {
          reject(error);
        }
      );
    });
  }

  /////////////////////////////////////////////////////////
  // Load a document from URN
  //
  /////////////////////////////////////////////////////////
  loadDocument(urn) {
    return new Promise((resolve, reject) => {
      const paramUrn = !urn.startsWith('urn:') ? 'urn:' + urn : urn;

      window.Autodesk.Viewing.Document.load(
        paramUrn,
        doc => {
          resolve(doc);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  /////////////////////////////////////////////////////////
  // Return viewable path: first 3d or 2d item by default
  //
  /////////////////////////////////////////////////////////
  getViewablePath(doc, pathIdx = 0, roles = ['3d', '2d']) {
    const rootItem = doc.getRootItem();

    const roleArray = [...roles];

    let items = [];

    roleArray.forEach(role => {
      items = [
        ...items,
        ...window.Autodesk.Viewing.Document.getSubItemsWithProperties(
          rootItem,
          { type: 'geometry', role },
          true
        )
      ];
    });

    if (!items.length || pathIdx > items.length) {
      return null;
    }

    return doc.getViewablePath(items[pathIdx]);
  }

  /////////////////////////////////////////////////////////
  // viewer div and component created
  //
  /////////////////////////////////////////////////////////
  async onViewerCreated(viewer) {
    try {
      let { id, extIds, urn, path, pathIdx } = qs.parse(
        this.props.location.search
      );

      // check if env is initialized
      // initializer cannot be invoked more than once

      if (!this.props.viewerEnv) {
        await this.initialize({
          env: 'AutodeskProduction',
          useConsolidation: true
        });

        this.props.setViewerEnv({ env: 'AutodeskProduction' });

        window.Autodesk.Viewing.endpoint.setEndpointAndApi(
          window.location.origin + '/lmv-proxy-2legged',
          'modelDerivativeV2'
        );

        window.Autodesk.Viewing.Private.memoryOptimizedSvfLoading = true;

        //Autodesk.Viewing.Private.logger.setLevel(0)
      }

      if (id) {
        // load by database id lookup
        // !NOT IMPLEMENTED HERE
        // could be something like:
        // const dbModel = getDBModelBy(id)
        // urn = dbModel.urn
      } else if (urn) {
        const doc = await this.loadDocument(urn);

        path = this.getViewablePath(doc, pathIdx || 0);
      } else if (!path) {
        const error =
          'Invalid query parameter: ' + 'use id OR urn OR path in url';

        throw new Error(error);
      }

      viewer.start();

      if (extIds) {
        const extensionIds = extIds.split(';');

        for (let extensionId of extensionIds) {
          viewer.loadDynamicExtension(extensionId);
        }
      }

      viewer.loadModel(path);
    } catch (ex) {
      console.log('ViewerScene Initialization Error: ');
      console.log(ex);
    }
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  render() {
    return (
      <div className="viewer-view">
        <Viewer
          onViewerCreated={viewer => {
            this.onViewerCreated(viewer);
          }}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setViewerEnv
};

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(ViewerScene);
