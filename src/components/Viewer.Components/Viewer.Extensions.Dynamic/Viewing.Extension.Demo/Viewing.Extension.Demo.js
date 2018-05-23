const ExtensionId = 'Viewing.Extension.Demo';

export default class DemoExtension extends window.Autodesk.Viewing.Extension {
  constructor(viewer, options) {
    super();

    this.viewer = viewer;

    console.log('options here');
    console.log(options);
  }

  load() {
    this.viewer.setBackgroundColor(255, 226, 110, 219, 219, 219);

    console.log(`${ExtensionId} loaded`);

    return true;
  }

  unload() {
    console.log(`${ExtensionId} unloaded`);

    return true;
  }
}

window.Autodesk.Viewing.theExtensionManager.registerExtension(
  ExtensionId,
  DemoExtension
);
