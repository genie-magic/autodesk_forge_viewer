import ViewerConfigurator from '../../components/Viewer.Components/Viewer.Configurator';
import qs from 'query-string';
import { connect } from 'react-redux';
import './ConfiguratorScene.css';
import React from 'react';
//import { browserHistory } from 'react-router'
import { setViewerEnv } from '../../modules/Viewer/ViewerAction';
const dbModel = {
  _id: '598d7ec14cabf2c1f4dec948',
  name: 'Markup 2D',
  env: 'Local',
  desc:
    'A demo editor to control the Markup 2D API: create and save sequences of viewer states including SVG data from the markups that be be restored at a later time at your will or replayed in order.',
  layout: {
    type: 'flexLayoutRight',
    rightFlex: 0.35
  },
  model: {
    path:
      'resources/models/rst_advanced_sample_project/Resource/3D View/{3D} 122632/{3D}.svf',
    guidPath:
      'resources/models/rst_advanced_sample_project/Resource/objects_ids.json.gz',
    urn:
      'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Zm9yZ2UtcmNkYi1nYWxsZXJ5LXRtcC1wcm9kL2RlNTktYTgxOC0zYzA1LmYzZA',
    name: 'Building'
  },
  dynamicExtensions: [
    {
      id: 'Viewing.Extension.ExtensionManager',
      options: {
        extensions: [
          {
            id: 'Viewing.Extension.Markup2D',
            enabled: true,
            options: {
              displayIndex: 0,
              flex: 0.7
            }
          },
          {
            id: 'Viewing.Extension.ModelLoader',
            enabled: true,
            options: {
              displayIndex: 1,
              flex: 0.3,
              database: 'gallery_dump',
              transformer: {
                fullTransform: true,
                hideControls: false
              }
            }
          },
          {
            id: 'Viewing.Extension.SelectionFilter',
            enabled: true,
            options: {
              displayIndex: 0,
              flex: 0.7
            }
          }
        ]
      }
    }
  ],
  sequences: [
    {
      id: '86c790dbf850',
      readonly: true,
      stateIds: [
        'afb20d9d877c',
        '989146765f06',
        '06e7944a269f',
        '9a285189f898',
        '880dd0ddf326',
        'cf10ca10be55',
        '548610b70c52',
        '92968480204e',
        '257d39cc4e6c'
      ],
      name: 'Demo'
    }
  ],
  states: [
    {
      seedURN:
        'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bGVlZnNtcC1mb3JnZS9vZmZpY2UucnZ0',
      objectSet: [
        {
          id: [],
          isolated: [],
          hidden: [],
          explodeScale: 0,
          idType: 'lmv'
        }
      ],
      viewport: {
        name: '',
        eye: [76.11599265245118, -76.20525084242242, 33.27767625556691],
        target: [12.03328542688787, -4.392917502919001, -9.927015454453162],
        up: [-0.2726649392427634, 0.3055536564330075, 0.9122997281311445],
        worldUpVector: [0, 0, 1],
        pivotPoint: [7.661362648010254, 3.3423211574554443, 2.9431896209716797],
        distanceToOrbit: 108.15020784662666,
        aspectRatio: 1.3082064447592068,
        projection: 'perspective',
        isOrthographic: false,
        fieldOfView: 53.13010235415598
      },
      renderOptions: {
        environment: 'Sharp Highlights',
        ambientOcclusion: {
          enabled: false,
          radius: 5.951773971947409,
          intensity: 0.4
        },
        toneMap: {
          method: 1,
          exposure: -9,
          lightMultiplier: -0.00000000000000000001
        },
        appearance: {
          ghostHidden: true,
          ambientShadow: false,
          antiAliasing: false,
          progressiveDisplay: true,
          swapBlackAndWhite: false,
          displayLines: true,
          displayPoints: true
        }
      },
      cutplanes: [],
      Markup2D: {
        data:
          '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" style="position:absolute; left:0; top:0; transform:scale(1,-1); -ms-transform:scale(1,-1); -webkit-transform:scale(1,-1); -moz-transform:scale(1,-1); -o-transform:scale(1,-1); transformOrigin:0, 0; -ms-transformOrigin:0, 0; -webkit-transformOrigin:0, 0; -moz-transformOrigin:0, 0; -o-transformOrigin:0, 0; " width="924" height="706" viewBox="-1308.7818696883853 -1000 2617.5637393767706 2000" pointer-events="none" cursor="crosshair"><metadata><markup_document xmlns="http://www.w3.org/1999/xhtml" data-model-version="4"></markup_document></metadata></svg>'
      },
      explodeScale: 0,
      transforms: {},
      id: 'afb20d9d877c',
      name: 'Conference Room 1'
    },
    {
      seedURN:
        'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bGVlZnNtcC1mb3JnZS9vZmZpY2UucnZ0',
      objectSet: [
        {
          id: [],
          isolated: [],
          hidden: [],
          explodeScale: 0,
          idType: 'lmv'
        }
      ],
      viewport: {
        name: '',
        eye: [76.11599265245118, -76.20525084242242, 33.27767625556691],
        target: [12.03328542688787, -4.392917502919001, -9.927015454453162],
        up: [-0.2726649392427634, 0.3055536564330075, 0.9122997281311445],
        worldUpVector: [0, 0, 1],
        pivotPoint: [7.661362648010254, 3.3423211574554443, 2.9431896209716797],
        distanceToOrbit: 108.15020784662666,
        aspectRatio: 1.3082064447592068,
        projection: 'perspective',
        isOrthographic: false,
        fieldOfView: 53.13010235415598
      },
      renderOptions: {
        environment: 'Sharp Highlights',
        ambientOcclusion: {
          enabled: false,
          radius: 5.951773971947409,
          intensity: 0.4
        },
        toneMap: {
          method: 1,
          exposure: -9,
          lightMultiplier: -0.00000000000000000001
        },
        appearance: {
          ghostHidden: true,
          ambientShadow: false,
          antiAliasing: false,
          progressiveDisplay: true,
          swapBlackAndWhite: false,
          displayLines: true,
          displayPoints: true
        }
      },
      cutplanes: [],
      Markup2D: {
        data:
          '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" style="position:absolute; left:0; top:0; transform:scale(1,-1); -ms-transform:scale(1,-1); -webkit-transform:scale(1,-1); -moz-transform:scale(1,-1); -o-transform:scale(1,-1); transformOrigin:0, 0; -ms-transformOrigin:0, 0; -webkit-transformOrigin:0, 0; -moz-transformOrigin:0, 0; -o-transformOrigin:0, 0; " width="924" height="706" viewBox="-1308.7818696883853 -1000 2617.5637393767706 2000" pointer-events="painted" cursor="crosshair"><metadata><markup_document xmlns="http://www.w3.org/1999/xhtml" data-model-version="4"></markup_document></metadata></svg>'
      },
      explodeScale: 0,
      transforms: {
        '0': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 37.07633590698242,
            y: 0,
            z: 0
          }
        }
      },
      id: '989146765f06',
      name: 'Conference Room 2'
    },
    {
      seedURN:
        'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bGVlZnNtcC1mb3JnZS9vZmZpY2UucnZ0',
      objectSet: [
        {
          id: [],
          isolated: [],
          hidden: [],
          explodeScale: 0,
          idType: 'lmv'
        }
      ],
      viewport: {
        name: '',
        eye: [35.34689403906767, 13.304024241709065, -9.04530228542207],
        target: [-57.643692208028945, 31.758467648741863, -55.331740458357885],
        up: [-0.4303414826924803, 0.08540340327508084, 0.8986169745687379],
        worldUpVector: [0, 0, 1],
        pivotPoint: [7.661362648010254, 3.3423211574554443, 2.9431896209716797],
        distanceToOrbit: 17.400488358374606,
        aspectRatio: 1.3082064447592068,
        projection: 'perspective',
        isOrthographic: false,
        fieldOfView: 53.13010235415598
      },
      renderOptions: {
        environment: 'Sharp Highlights',
        ambientOcclusion: {
          enabled: false,
          radius: 5.951773971947409,
          intensity: 0.4
        },
        toneMap: {
          method: 1,
          exposure: -9,
          lightMultiplier: -0.00000000000000000001
        },
        appearance: {
          ghostHidden: true,
          ambientShadow: false,
          antiAliasing: false,
          progressiveDisplay: true,
          swapBlackAndWhite: false,
          displayLines: true,
          displayPoints: true
        }
      },
      cutplanes: [],
      Markup2D: {
        data:
          '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" style="position:absolute; left:0; top:0; transform:scale(1,-1); -ms-transform:scale(1,-1); -webkit-transform:scale(1,-1); -moz-transform:scale(1,-1); -o-transform:scale(1,-1); transformOrigin:0, 0; -ms-transformOrigin:0, 0; -webkit-transformOrigin:0, 0; -moz-transformOrigin:0, 0; -o-transformOrigin:0, 0; " width="924" height="706" viewBox="-1308.7818696883853 -1000 2617.5637393767706 2000" pointer-events="painted" cursor="crosshair"><metadata><markup_document xmlns="http://www.w3.org/1999/xhtml" data-model-version="4"></markup_document></metadata></svg>'
      },
      explodeScale: 0,
      transforms: {
        '0': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 37.07633590698242,
            y: 0,
            z: 0
          }
        }
      },
      id: '06e7944a269f',
      name: 'Conference Room 3'
    },
    {
      seedURN:
        'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bGVlZnNtcC1mb3JnZS9vZmZpY2UucnZ0',
      objectSet: [
        {
          id: [],
          isolated: [],
          hidden: [],
          explodeScale: 0,
          idType: 'lmv'
        }
      ],
      viewport: {
        name: '',
        eye: [35.34689403906767, 13.304024241709065, -9.04530228542207],
        target: [-57.643692208028945, 31.758467648741863, -55.331740458357885],
        up: [-0.4303414826924803, 0.08540340327508084, 0.8986169745687379],
        worldUpVector: [0, 0, 1],
        pivotPoint: [7.661362648010254, 3.3423211574554443, 2.9431896209716797],
        distanceToOrbit: 17.400488358374606,
        aspectRatio: 1.3082064447592068,
        projection: 'perspective',
        isOrthographic: false,
        fieldOfView: 53.13010235415598
      },
      renderOptions: {
        environment: 'Sharp Highlights',
        ambientOcclusion: {
          enabled: false,
          radius: 5.951773971947409,
          intensity: 0.4
        },
        toneMap: {
          method: 1,
          exposure: -9,
          lightMultiplier: -0.00000000000000000001
        },
        appearance: {
          ghostHidden: true,
          ambientShadow: false,
          antiAliasing: false,
          progressiveDisplay: true,
          swapBlackAndWhite: false,
          displayLines: true,
          displayPoints: true
        }
      },
      cutplanes: [],
      Markup2D: {
        data:
          '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" style="position:absolute; left:0; top:0; transform:scale(1,-1); -ms-transform:scale(1,-1); -webkit-transform:scale(1,-1); -moz-transform:scale(1,-1); -o-transform:scale(1,-1); transformOrigin:0, 0; -ms-transformOrigin:0, 0; -webkit-transformOrigin:0, 0; -moz-transformOrigin:0, 0; -o-transformOrigin:0, 0; " width="924" height="706" viewBox="-1308.7818696883853 -1000 2617.5637393767706 2000" pointer-events="painted" cursor="crosshair"><metadata><markup_document xmlns="http://www.w3.org/1999/xhtml" data-model-version="4"></markup_document></metadata></svg>'
      },
      explodeScale: 0,
      transforms: {
        '0': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 37.07633590698242,
            y: 0,
            z: 0
          }
        },
        '628': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: -3.0545217990875244,
            z: 0
          }
        },
        '629': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: -4.821961879730225,
            y: 0,
            z: 0
          }
        },
        '630': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 1.9197484254837036,
            y: 0,
            z: 0
          }
        },
        '631': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: 2.8537797927856445,
            z: 0
          }
        },
        '1035': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: -4.821961879730225,
            y: 0,
            z: 0
          }
        },
        '1036': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 1.9197484254837036,
            y: 0,
            z: 0
          }
        },
        '1037': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: -3.0545217990875244,
            z: 0
          }
        },
        '1038': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: 2.8537797927856445,
            z: 0
          }
        }
      },
      id: '9a285189f898',
      name: 'Conference Room 4'
    },
    {
      seedURN:
        'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bGVlZnNtcC1mb3JnZS9vZmZpY2UucnZ0',
      objectSet: [
        {
          id: [],
          isolated: [],
          hidden: [],
          explodeScale: 0,
          idType: 'lmv'
        }
      ],
      viewport: {
        name: '',
        eye: [35.34689403906767, 13.304024241709065, -9.04530228542207],
        target: [-57.643692208028945, 31.758467648741863, -55.331740458357885],
        up: [-0.4303414826924803, 0.08540340327508084, 0.8986169745687379],
        worldUpVector: [0, 0, 1],
        pivotPoint: [7.661362648010254, 3.3423211574554443, 2.9431896209716797],
        distanceToOrbit: 17.400488358374606,
        aspectRatio: 1.3082064447592068,
        projection: 'perspective',
        isOrthographic: false,
        fieldOfView: 53.13010235415598
      },
      renderOptions: {
        environment: 'Sharp Highlights',
        ambientOcclusion: {
          enabled: false,
          radius: 5.951773971947409,
          intensity: 0.4
        },
        toneMap: {
          method: 1,
          exposure: -9,
          lightMultiplier: -0.00000000000000000001
        },
        appearance: {
          ghostHidden: true,
          ambientShadow: false,
          antiAliasing: false,
          progressiveDisplay: true,
          swapBlackAndWhite: false,
          displayLines: true,
          displayPoints: true
        }
      },
      cutplanes: [],
      Markup2D: {
        data:
          '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" style="position:absolute; left:0; top:0; transform:scale(1,-1); -ms-transform:scale(1,-1); -webkit-transform:scale(1,-1); -moz-transform:scale(1,-1); -o-transform:scale(1,-1); transformOrigin:0, 0; -ms-transformOrigin:0, 0; -webkit-transformOrigin:0, 0; -moz-transformOrigin:0, 0; -o-transformOrigin:0, 0; " width="924" height="706" viewBox="-1308.7818696883853 -1000 2617.5637393767706 2000" pointer-events="painted" cursor="crosshair"><metadata><markup_document xmlns="http://www.w3.org/1999/xhtml" data-model-version="4"></markup_document></metadata><g cursor="inherit" pointer-events="stroke"><metadata><markup_element xmlns="http://www.w3.org/1999/xhtml" stroke-width="14.164305949008508" stroke-color="#ff0000" stroke-opacity="1" fill-color="#ff0000" fill-opacity="0" type="rectangle" position="614.7308781869688 -86.40226628895184" size="351.27478753541084 456.09065155807355" rotation="0"></markup_element></metadata><path id="markup" d="M -168.55524079320116 -220.96317280453252 l 337.11048158640233 0 l 0 441.92634560906504 l -337.11048158640233 0 z" stroke-width="14.164305949008508" stroke="rgba(255,0,0,1)" fill="none" transform="translate( 614.7308781869688 , -86.40226628895184 ) rotate( 0 )"/></g><g cursor="default" pointer-events="painted"><metadata><markup_element xmlns="http://www.w3.org/1999/xhtml" font-size="67.98866855524079" stroke-color="#ff0000" stroke-opacity="1" fill-color="#ff0000" fill-opacity="0" font-family="Arial" font-style="normal" font-weight="normal" type="label" position="694.0509915014164 189.80169971671387" size="509.91501416430594 101.98300283286119" text="Right Chair"></markup_element></metadata><g clip-path="url(#markup-clipper-612E0541-17EA-40DB-9ABB-909C1FA063B4)"><clipPath id="markup-clipper-612E0541-17EA-40DB-9ABB-909C1FA063B4"><rect transform="translate( 439.09348441926346 , 240.79320113314446 ) rotate( 0 ) scale(1,-1)" x="0" y="0" width="365.43909348441935" height="101.98300283286119"/></clipPath><rect id="markup-background" transform="translate( 439.09348441926346 , 240.79320113314446 ) rotate( 0 ) scale(1,-1)" x="0" y="0" width="365.43909348441935" height="101.98300283286119" fill="none"/><text id="markup" alignment-baseline="middle" font-family="Arial" font-size="6798.866855524079" fill="rgba(255,0,0,1)" font-weight="normal" font-style="normal" transform="translate( 439.09348441926346 , 172.80453257790367 ) rotate( 0 ) scale(0.01,-0.01)"><tspan x="0" y="0">Right Chair</tspan></text></g></g></svg>'
      },
      explodeScale: 0,
      transforms: {
        '0': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 37.07633590698242,
            y: 0,
            z: 0
          }
        },
        '628': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: -3.0545217990875244,
            z: 0
          }
        },
        '629': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: -4.821961879730225,
            y: 0,
            z: 0
          }
        },
        '630': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 1.9197484254837036,
            y: 0,
            z: 0
          }
        },
        '631': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: 2.8537797927856445,
            z: 0
          }
        },
        '1035': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: -4.821961879730225,
            y: 0,
            z: 0
          }
        },
        '1036': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 1.9197484254837036,
            y: 0,
            z: 0
          }
        },
        '1037': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: -3.0545217990875244,
            z: 0
          }
        },
        '1038': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: 2.8537797927856445,
            z: 0
          }
        }
      },
      id: '880dd0ddf326',
      name: 'Conference Room 5'
    },
    {
      seedURN:
        'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bGVlZnNtcC1mb3JnZS9vZmZpY2UucnZ0',
      objectSet: [
        {
          id: [],
          isolated: [],
          hidden: [],
          explodeScale: 0,
          idType: 'lmv'
        }
      ],
      viewport: {
        name: '',
        eye: [35.34689403906767, 13.304024241709065, -9.04530228542207],
        target: [-57.643692208028945, 31.758467648741863, -55.331740458357885],
        up: [-0.4303414826924803, 0.08540340327508084, 0.8986169745687379],
        worldUpVector: [0, 0, 1],
        pivotPoint: [7.661362648010254, 3.3423211574554443, 2.9431896209716797],
        distanceToOrbit: 17.400488358374606,
        aspectRatio: 1.3082064447592068,
        projection: 'perspective',
        isOrthographic: false,
        fieldOfView: 53.13010235415598
      },
      renderOptions: {
        environment: 'Sharp Highlights',
        ambientOcclusion: {
          enabled: false,
          radius: 5.951773971947409,
          intensity: 0.4
        },
        toneMap: {
          method: 1,
          exposure: -9,
          lightMultiplier: -0.00000000000000000001
        },
        appearance: {
          ghostHidden: true,
          ambientShadow: false,
          antiAliasing: false,
          progressiveDisplay: true,
          swapBlackAndWhite: false,
          displayLines: true,
          displayPoints: true
        }
      },
      cutplanes: [],
      Markup2D: {
        data:
          '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" style="position:absolute; left:0; top:0; transform:scale(1,-1); -ms-transform:scale(1,-1); -webkit-transform:scale(1,-1); -moz-transform:scale(1,-1); -o-transform:scale(1,-1); transformOrigin:0, 0; -ms-transformOrigin:0, 0; -webkit-transformOrigin:0, 0; -moz-transformOrigin:0, 0; -o-transformOrigin:0, 0; " width="924" height="706" viewBox="-1308.7818696883853 -1000 2617.5637393767706 2000" pointer-events="painted" cursor="crosshair"><metadata><markup_document xmlns="http://www.w3.org/1999/xhtml" data-model-version="4"></markup_document></metadata><g cursor="inherit" pointer-events="painted"><metadata><markup_element xmlns="http://www.w3.org/1999/xhtml" stroke-width="14.164305949008508" stroke-color="#ff0000" stroke-opacity="1" fill-color="#ff0000" fill-opacity="1" type="arrow" head="53.82436260623229 -48.15864022662889" tail="456.09065155807366 390.93484419263456" rotation="2.3124513680411605"></markup_element></metadata><path id="markup" d="M -297.7504220343509 -7.082152974504254 l 553.0079262216763 0 l -4.249291784702552 -14.164305949008508 l 46.74220963172807 21.246458923512762 l -46.74220963172807 21.246458923512762 l 4.249291784702552 -14.164305949008508 l -553.0079262216763 0 z" stroke-width="14.164305949008508" stroke="rgba(255,0,0,1)" fill="rgba(255,0,0,1)" transform="translate( 254.95750708215297 , 171.38810198300283 ) rotate( -132.49370371801191 )"/></g><g cursor="default" pointer-events="painted"><metadata><markup_element xmlns="http://www.w3.org/1999/xhtml" font-size="67.98866855524079" stroke-color="#ff0000" stroke-opacity="1" fill-color="#ff0000" fill-opacity="0" font-family="Arial" font-style="normal" font-weight="normal" type="label" position="736.543909348442 433.42776203966" size="509.91501416430594 101.98300283286119" text="Table"></markup_element></metadata><g clip-path="url(#markup-clipper-477D3CCA-205B-4E8C-9835-F6648A98378C)"><clipPath id="markup-clipper-477D3CCA-205B-4E8C-9835-F6648A98378C"><rect transform="translate( 481.586402266289 , 484.4192634560906 ) rotate( 0 ) scale(1,-1)" x="0" y="0" width="175.63739376770536" height="101.98300283286119"/></clipPath><rect id="markup-background" transform="translate( 481.586402266289 , 484.4192634560906 ) rotate( 0 ) scale(1,-1)" x="0" y="0" width="175.63739376770536" height="101.98300283286119" fill="none"/><text id="markup" alignment-baseline="middle" font-family="Arial" font-size="6798.866855524079" fill="rgba(255,0,0,1)" font-weight="normal" font-style="normal" transform="translate( 481.586402266289 , 416.4305949008498 ) rotate( 0 ) scale(0.01,-0.01)"><tspan x="0" y="0">Table</tspan></text></g></g></svg>'
      },
      explodeScale: 0,
      transforms: {
        '0': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 37.07633590698242,
            y: 0,
            z: 0
          }
        },
        '628': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: -3.0545217990875244,
            z: 0
          }
        },
        '629': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: -4.821961879730225,
            y: 0,
            z: 0
          }
        },
        '630': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 1.9197484254837036,
            y: 0,
            z: 0
          }
        },
        '631': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: 2.8537797927856445,
            z: 0
          }
        },
        '1035': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: -4.821961879730225,
            y: 0,
            z: 0
          }
        },
        '1036': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 1.9197484254837036,
            y: 0,
            z: 0
          }
        },
        '1037': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: -3.0545217990875244,
            z: 0
          }
        },
        '1038': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: 2.8537797927856445,
            z: 0
          }
        }
      },
      id: 'cf10ca10be55',
      name: 'Conference Room 6'
    },
    {
      seedURN:
        'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bGVlZnNtcC1mb3JnZS9vZmZpY2UucnZ0',
      objectSet: [
        {
          id: [],
          isolated: [],
          hidden: [],
          explodeScale: 0,
          idType: 'lmv'
        }
      ],
      viewport: {
        name: '',
        eye: [35.34689403906767, 13.304024241709065, -9.04530228542207],
        target: [-57.643692208028945, 31.758467648741863, -55.331740458357885],
        up: [-0.4303414826924803, 0.08540340327508084, 0.8986169745687379],
        worldUpVector: [0, 0, 1],
        pivotPoint: [7.661362648010254, 3.3423211574554443, 2.9431896209716797],
        distanceToOrbit: 17.400488358374606,
        aspectRatio: 1.3082064447592068,
        projection: 'perspective',
        isOrthographic: false,
        fieldOfView: 53.13010235415598
      },
      renderOptions: {
        environment: 'Sharp Highlights',
        ambientOcclusion: {
          enabled: false,
          radius: 5.951773971947409,
          intensity: 0.4
        },
        toneMap: {
          method: 1,
          exposure: -9,
          lightMultiplier: -0.00000000000000000001
        },
        appearance: {
          ghostHidden: true,
          ambientShadow: false,
          antiAliasing: false,
          progressiveDisplay: true,
          swapBlackAndWhite: false,
          displayLines: true,
          displayPoints: true
        }
      },
      cutplanes: [],
      Markup2D: {
        data:
          '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" style="position:absolute; left:0; top:0; transform:scale(1,-1); -ms-transform:scale(1,-1); -webkit-transform:scale(1,-1); -moz-transform:scale(1,-1); -o-transform:scale(1,-1); transformOrigin:0, 0; -ms-transformOrigin:0, 0; -webkit-transformOrigin:0, 0; -moz-transformOrigin:0, 0; -o-transformOrigin:0, 0; " width="924" height="706" viewBox="-1308.7818696883853 -1000 2617.5637393767706 2000" pointer-events="painted" cursor="crosshair"><metadata><markup_document xmlns="http://www.w3.org/1999/xhtml" data-model-version="4"></markup_document></metadata><g cursor="inherit" pointer-events="stroke"><metadata><markup_element xmlns="http://www.w3.org/1999/xhtml" stroke-width="14.164305949008508" stroke-color="#ff0000" stroke-opacity="1" fill-color="#ff0000" fill-opacity="0" type="ellipse" position="-657.2237960339944 -252.12464589235128" size="583.5694050991501 549.5750708215297" rotation="0"></markup_element></metadata><path id="markup" d="M -284.7025495750708 0 a 284.7025495750708 267.7053824362606 0 1 1 569.4050991501416 0 a 284.7025495750708 267.7053824362606 0 1 1 -569.4050991501416 0 z" stroke-width="14.164305949008508" stroke="rgba(255,0,0,1)" fill="none" transform="translate( -657.2237960339944 , -252.12464589235128 ) rotate( 0 )"/></g><g cursor="default" pointer-events="painted"><metadata><markup_element xmlns="http://www.w3.org/1999/xhtml" font-size="67.98866855524079" stroke-color="#ff0000" stroke-opacity="1" fill-color="#ff0000" fill-opacity="0" font-family="Arial" font-style="normal" font-weight="normal" type="label" position="-558.0736543909348 79.3201133144476" size="509.91501416430594 101.98300283286119" text="Left Chair"></markup_element></metadata><g clip-path="url(#markup-clipper-51AD2BD5-1F87-481F-BD1E-B4E56E3676EC)"><clipPath id="markup-clipper-51AD2BD5-1F87-481F-BD1E-B4E56E3676EC"><rect transform="translate( -813.0311614730879 , 130.3116147308782 ) rotate( 0 ) scale(1,-1)" x="0" y="0" width="317.28045325779044" height="101.98300283286119"/></clipPath><rect id="markup-background" transform="translate( -813.0311614730879 , 130.3116147308782 ) rotate( 0 ) scale(1,-1)" x="0" y="0" width="317.28045325779044" height="101.98300283286119" fill="none"/><text id="markup" alignment-baseline="middle" font-family="Arial" font-size="6798.866855524079" fill="rgba(255,0,0,1)" font-weight="normal" font-style="normal" transform="translate( -813.0311614730879 , 62.32294617563741 ) rotate( 0 ) scale(0.01,-0.01)"><tspan x="0" y="0">Left Chair</tspan></text></g></g></svg>'
      },
      explodeScale: 0,
      transforms: {
        '0': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 37.07633590698242,
            y: 0,
            z: 0
          }
        },
        '628': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: -3.0545217990875244,
            z: 0
          }
        },
        '629': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: -4.821961879730225,
            y: 0,
            z: 0
          }
        },
        '630': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 1.9197484254837036,
            y: 0,
            z: 0
          }
        },
        '631': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: 2.8537797927856445,
            z: 0
          }
        },
        '1035': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: -4.821961879730225,
            y: 0,
            z: 0
          }
        },
        '1036': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 1.9197484254837036,
            y: 0,
            z: 0
          }
        },
        '1037': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: -3.0545217990875244,
            z: 0
          }
        },
        '1038': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: 2.8537797927856445,
            z: 0
          }
        }
      },
      id: '548610b70c52',
      name: 'Conference Room 7'
    },
    {
      seedURN:
        'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bGVlZnNtcC1mb3JnZS9vZmZpY2UucnZ0',
      objectSet: [
        {
          id: [],
          isolated: [],
          hidden: [],
          explodeScale: 0,
          idType: 'lmv'
        }
      ],
      viewport: {
        name: '',
        eye: [35.34689403906767, 13.304024241709065, -9.04530228542207],
        target: [-57.643692208028945, 31.758467648741863, -55.331740458357885],
        up: [-0.4303414826924803, 0.08540340327508084, 0.8986169745687379],
        worldUpVector: [0, 0, 1],
        pivotPoint: [7.661362648010254, 3.3423211574554443, 2.9431896209716797],
        distanceToOrbit: 17.400488358374606,
        aspectRatio: 1.3082064447592068,
        projection: 'perspective',
        isOrthographic: false,
        fieldOfView: 53.13010235415598
      },
      renderOptions: {
        environment: 'Sharp Highlights',
        ambientOcclusion: {
          enabled: false,
          radius: 5.951773971947409,
          intensity: 0.4
        },
        toneMap: {
          method: 1,
          exposure: -9,
          lightMultiplier: -0.00000000000000000001
        },
        appearance: {
          ghostHidden: true,
          ambientShadow: false,
          antiAliasing: false,
          progressiveDisplay: true,
          swapBlackAndWhite: false,
          displayLines: true,
          displayPoints: true
        }
      },
      cutplanes: [],
      Markup2D: {
        data:
          '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" style="position:absolute; left:0; top:0; transform:scale(1,-1); -ms-transform:scale(1,-1); -webkit-transform:scale(1,-1); -moz-transform:scale(1,-1); -o-transform:scale(1,-1); transformOrigin:0, 0; -ms-transformOrigin:0, 0; -webkit-transformOrigin:0, 0; -moz-transformOrigin:0, 0; -o-transformOrigin:0, 0; " width="924" height="706" viewBox="-1308.7818696883853 -1000 2617.5637393767706 2000" pointer-events="painted" cursor="crosshair"><metadata><markup_document xmlns="http://www.w3.org/1999/xhtml" data-model-version="4"></markup_document></metadata><g cursor="inherit" pointer-events="stroke"><metadata><markup_element xmlns="http://www.w3.org/1999/xhtml" stroke-width="14.164305949008508" stroke-linejoin="miter" stroke-color="#ff0000" stroke-opacity="1" fill-color="#ff0000" fill-opacity="0" type="cloud" position="161.47308781869688 -549.5750708215298" size="515.5807365439093 470.25495750708217" rotation="0"></markup_element></metadata><path id="markup" d="M -222.85174693106703 -171.03399433427762 a 27.85646836638338 28.505665722379604 0 1 1 27.85646836638338 -28.505665722379604 c 2.785646836638338 -32.49921309411394 52.92728989612842 -32.49921309411394 55.71293673276676 0 c 2.785646836638338 -32.49921309411394 52.92728989612842 -32.49921309411394 55.71293673276676 0 c 2.785646836638338 -32.49921309411394 52.92728989612842 -32.49921309411394 55.71293673276676 0 c 2.785646836638338 -32.49921309411394 52.92728989612842 -32.49921309411394 55.71293673276676 0 c 2.785646836638338 -32.49921309411394 52.92728989612842 -32.49921309411394 55.71293673276676 0 c 2.785646836638338 -32.49921309411394 52.92728989612842 -32.49921309411394 55.71293673276676 0 c 2.785646836638338 -32.49921309411394 52.92728989612842 -32.49921309411394 55.71293673276676 0 a 27.85646836638338 28.505665722379604 0 1 1 27.85646836638338 28.505665722379604 c 33.25661000944287 2.8505665722379607 33.25661000944287 54.16076487252125 0 57.01133144475921 c 33.25661000944287 2.8505665722379607 33.25661000944287 54.16076487252125 0 57.01133144475921 c 33.25661000944287 2.8505665722379607 33.25661000944287 54.16076487252125 0 57.01133144475921 c 33.25661000944287 2.8505665722379607 33.25661000944287 54.16076487252125 0 57.01133144475921 c 33.25661000944287 2.8505665722379607 33.25661000944287 54.16076487252125 0 57.01133144475921 c 33.25661000944287 2.8505665722379607 33.25661000944287 54.16076487252125 0 57.01133144475921 a 27.85646836638338 28.505665722379604 0 1 1 -27.85646836638338 28.505665722379604 c -2.785646836638338 32.49921309411394 -52.92728989612842 32.49921309411394 -55.71293673276676 0 c -2.785646836638338 32.49921309411394 -52.92728989612842 32.49921309411394 -55.71293673276676 0 c -2.785646836638338 32.49921309411394 -52.92728989612842 32.49921309411394 -55.71293673276676 0 c -2.785646836638338 32.49921309411394 -52.92728989612842 32.49921309411394 -55.71293673276676 0 c -2.785646836638338 32.49921309411394 -52.92728989612842 32.49921309411394 -55.71293673276676 0 c -2.785646836638338 32.49921309411394 -52.92728989612842 32.49921309411394 -55.71293673276676 0 c -2.785646836638338 32.49921309411394 -52.92728989612842 32.49921309411394 -55.71293673276676 0 a 27.85646836638338 28.505665722379604 0 1 1 -27.85646836638338 -28.505665722379604 c -33.25661000944287 -2.8505665722379607 -33.25661000944287 -54.16076487252125 0 -57.01133144475921 c -33.25661000944287 -2.8505665722379607 -33.25661000944287 -54.16076487252125 0 -57.01133144475921 c -33.25661000944287 -2.8505665722379607 -33.25661000944287 -54.16076487252125 0 -57.01133144475921 c -33.25661000944287 -2.8505665722379607 -33.25661000944287 -54.16076487252125 0 -57.01133144475921 c -33.25661000944287 -2.8505665722379607 -33.25661000944287 -54.16076487252125 0 -57.01133144475921 c -33.25661000944287 -2.8505665722379607 -33.25661000944287 -54.16076487252125 0 -57.01133144475921 z" stroke-width="14.164305949008508" stroke="rgba(255,0,0,1)" fill="none" transform="translate( 161.47308781869688 , -549.5750708215298 ) rotate( 0 )"/></g><g cursor="default" pointer-events="painted"><metadata><markup_element xmlns="http://www.w3.org/1999/xhtml" font-size="67.98866855524079" stroke-color="#ff0000" stroke-opacity="1" fill-color="#ff0000" fill-opacity="0" font-family="Arial" font-style="normal" font-weight="normal" type="label" position="730.8781869688386 -495.75070821529744" size="509.91501416430594 101.98300283286119" text="Bottom Chair"></markup_element></metadata><g clip-path="url(#markup-clipper-D4FA1D32-0DFD-45CE-8E91-23BD4E1DE3AA)"><clipPath id="markup-clipper-D4FA1D32-0DFD-45CE-8E91-23BD4E1DE3AA"><rect transform="translate( 475.9206798866856 , -444.75920679886684 ) rotate( 0 ) scale(1,-1)" x="0" y="0" width="430.5949008498584" height="101.98300283286119"/></clipPath><rect id="markup-background" transform="translate( 475.9206798866856 , -444.75920679886684 ) rotate( 0 ) scale(1,-1)" x="0" y="0" width="430.5949008498584" height="101.98300283286119" fill="none"/><text id="markup" alignment-baseline="middle" font-family="Arial" font-size="6798.866855524079" fill="rgba(255,0,0,1)" font-weight="normal" font-style="normal" transform="translate( 475.9206798866856 , -512.7478753541077 ) rotate( 0 ) scale(0.01,-0.01)"><tspan x="0" y="0">Bottom Chair</tspan></text></g></g></svg>'
      },
      explodeScale: 0,
      transforms: {
        '0': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 37.07633590698242,
            y: 0,
            z: 0
          }
        },
        '628': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: -3.0545217990875244,
            z: 0
          }
        },
        '629': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: -4.821961879730225,
            y: 0,
            z: 0
          }
        },
        '630': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 1.9197484254837036,
            y: 0,
            z: 0
          }
        },
        '631': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: 2.8537797927856445,
            z: 0
          }
        },
        '1035': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: -4.821961879730225,
            y: 0,
            z: 0
          }
        },
        '1036': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 1.9197484254837036,
            y: 0,
            z: 0
          }
        },
        '1037': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: -3.0545217990875244,
            z: 0
          }
        },
        '1038': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: 2.8537797927856445,
            z: 0
          }
        }
      },
      id: '92968480204e',
      name: 'Conference Room 8'
    },
    {
      seedURN:
        'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bGVlZnNtcC1mb3JnZS9vZmZpY2UucnZ0',
      objectSet: [
        {
          id: [],
          isolated: [],
          hidden: [],
          explodeScale: 0,
          idType: 'lmv'
        }
      ],
      viewport: {
        name: '',
        eye: [35.34689403906767, 13.304024241709065, -9.04530228542207],
        target: [-57.643692208028945, 31.758467648741863, -55.331740458357885],
        up: [-0.4303414826924803, 0.08540340327508084, 0.8986169745687379],
        worldUpVector: [0, 0, 1],
        pivotPoint: [7.661362648010254, 3.3423211574554443, 2.9431896209716797],
        distanceToOrbit: 17.400488358374606,
        aspectRatio: 1.3082064447592068,
        projection: 'perspective',
        isOrthographic: false,
        fieldOfView: 53.13010235415598
      },
      renderOptions: {
        environment: 'Sharp Highlights',
        ambientOcclusion: {
          enabled: false,
          radius: 5.951773971947409,
          intensity: 0.4
        },
        toneMap: {
          method: 1,
          exposure: -9,
          lightMultiplier: -0.00000000000000000001
        },
        appearance: {
          ghostHidden: true,
          ambientShadow: false,
          antiAliasing: false,
          progressiveDisplay: true,
          swapBlackAndWhite: false,
          displayLines: true,
          displayPoints: true
        }
      },
      cutplanes: [],
      Markup2D: {
        data:
          '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" style="position:absolute; left:0; top:0; transform:scale(1,-1); -ms-transform:scale(1,-1); -webkit-transform:scale(1,-1); -moz-transform:scale(1,-1); -o-transform:scale(1,-1); transformOrigin:0, 0; -ms-transformOrigin:0, 0; -webkit-transformOrigin:0, 0; -moz-transformOrigin:0, 0; -o-transformOrigin:0, 0; " width="924" height="706" viewBox="-1308.7818696883853 -1000 2617.5637393767706 2000" pointer-events="painted" cursor="crosshair"><metadata><markup_document xmlns="http://www.w3.org/1999/xhtml" data-model-version="4"></markup_document></metadata><g cursor="inherit" pointer-events="stroke"><metadata><markup_element xmlns="http://www.w3.org/1999/xhtml" stroke-width="14.164305949008508" stroke-color="#ff0000" stroke-opacity="0.75" type="freehand" position="-79.32011331444758 184.1359773371105" size="334.2776203966006 362.6062322946176" rotation="0" locations="-87.81869688385271 178.4702549575071 -90.6515580736544 178.4702549575071 -93.48441926345609 175.63739376770542 -96.31728045325778 175.63739376770542 -99.1501416430595 172.80453257790367 -99.1501416430595 172.80453257790367 -101.98300283286122 172.80453257790367 -101.98300283286122 169.97167138810198 -101.98300283286122 169.97167138810198 -104.81586402266291 169.97167138810198 -107.6487252124646 167.13881019830023 -107.6487252124646 167.13881019830023 -110.48158640226629 164.30594900849854 -113.31444759206798 164.30594900849854 -113.31444759206798 161.47308781869685 -113.31444759206798 161.47308781869685 -116.1473087818697 158.64022662889516 -116.1473087818697 158.64022662889516 -118.98016997167142 155.80736543909347 -118.98016997167142 155.80736543909347 -118.98016997167142 152.97450424929178 -121.8130311614731 152.97450424929178 -121.8130311614731 152.97450424929178 -124.6458923512748 150.1416430594901 -124.6458923512748 150.1416430594901 -127.47875354107649 147.3087818696884 -127.47875354107649 147.3087818696884 -127.47875354107649 147.3087818696884 -127.47875354107649 144.4759206798867 -130.3116147308782 141.64305949008497 -130.3116147308782 138.81019830028328 -130.3116147308782 138.81019830028328 -133.1444759206799 135.97733711048159 -135.97733711048159 133.1444759206799 -135.97733711048159 130.3116147308782 -135.97733711048159 127.47875354107646 -135.97733711048159 127.47875354107646 -135.97733711048159 124.64589235127477 -138.81019830028328 121.81303116147308 -141.643059490085 118.98016997167139 -144.4759206798867 113.31444759206795 -144.4759206798867 110.48158640226626 -147.3087818696884 107.64872521246457 -147.3087818696884 104.81586402266288 -147.3087818696884 104.81586402266288 -147.3087818696884 101.98300283286119 -147.3087818696884 101.98300283286119 -147.3087818696884 99.1501416430595 -147.3087818696884 96.31728045325781 -147.3087818696884 96.31728045325781 -147.3087818696884 93.48441926345612 -150.1416430594901 90.65155807365443 -150.1416430594901 87.81869688385274 -150.1416430594901 87.81869688385274 -150.1416430594901 84.98583569405093 -150.1416430594901 82.15297450424924 -150.1416430594901 82.15297450424924 -150.1416430594901 79.32011331444755 -150.1416430594901 76.48725212464586 -152.97450424929178 70.82152974504248 -152.97450424929178 70.82152974504248 -152.97450424929178 67.98866855524079 -152.97450424929178 65.15580736543907 -155.80736543909347 59.49008498583569 -155.80736543909347 53.824362606232285 -155.80736543909347 48.158640226628876 -158.6402266288952 42.492917847025495 -158.6402266288952 39.660056657223805 -158.6402266288952 36.82719546742209 -158.6402266288952 33.99433427762037 -158.6402266288952 28.328611898016987 -161.4730878186969 22.66288951841358 -161.4730878186969 19.83002832861189 -161.4730878186969 16.997167138810198 -161.4730878186969 14.164305949008508 -161.4730878186969 8.49858356940507 -161.4730878186969 5.66572237960338 -164.3059490084986 0 -164.3059490084986 -2.83286118980169 -164.3059490084986 -5.665722379603409 -164.3059490084986 -8.498583569405127 -164.3059490084986 -11.331444759206818 -164.3059490084986 -14.164305949008508 -164.3059490084986 -16.997167138810198 -167.1388101983003 -25.495750708215297 -167.1388101983003 -28.328611898017016 -167.1388101983003 -33.994334277620396 -167.1388101983003 -39.660056657223805 -167.1388101983003 -45.325779036827186 -167.1388101983003 -50.99150141643062 -167.1388101983003 -56.657223796034 -167.1388101983003 -62.3229461756374 -167.1388101983003 -67.9886685552408 -167.1388101983003 -70.8215297450425 -167.1388101983003 -79.3201133144476 -167.1388101983003 -84.98583569405099 -167.1388101983003 -87.81869688385271 -167.1388101983003 -93.48441926345609 -167.1388101983003 -96.31728045325781 -167.1388101983003 -99.1501416430595 -167.1388101983003 -101.98300283286119 -167.1388101983003 -104.8158640226629 -167.1388101983003 -107.6487252124646 -167.1388101983003 -107.6487252124646 -167.1388101983003 -110.4815864022663 -167.1388101983003 -110.4815864022663 -167.1388101983003 -113.31444759206799 -167.1388101983003 -113.31444759206799 -167.1388101983003 -116.14730878186968 -167.1388101983003 -118.9801699716714 -167.1388101983003 -124.6458923512748 -167.1388101983003 -127.47875354107649 -164.3059490084986 -130.3116147308782 -164.3059490084986 -130.3116147308782 -164.3059490084986 -133.1444759206799 -164.3059490084986 -133.1444759206799 -164.3059490084986 -133.1444759206799 -161.4730878186969 -135.97733711048159 -161.4730878186969 -138.81019830028328 -158.6402266288952 -141.643059490085 -158.6402266288952 -141.643059490085 -158.6402266288952 -144.47592067988668 -158.6402266288952 -144.47592067988668 -155.80736543909347 -147.3087818696884 -155.80736543909347 -150.1416430594901 -152.97450424929178 -152.97450424929178 -152.97450424929178 -155.8073654390935 -150.1416430594901 -161.47308781869688 -150.1416430594901 -161.47308781869688 -150.1416430594901 -164.3059490084986 -150.1416430594901 -164.3059490084986 -150.1416430594901 -164.3059490084986 -147.3087818696884 -164.3059490084986 -147.3087818696884 -167.1388101983003 -147.3087818696884 -167.1388101983003 -147.3087818696884 -167.1388101983003 -144.4759206798867 -167.1388101983003 -144.4759206798867 -167.1388101983003 -141.643059490085 -169.97167138810198 -141.643059490085 -169.97167138810198 -138.81019830028328 -172.8045325779037 -135.97733711048159 -172.8045325779037 -135.97733711048159 -172.8045325779037 -133.1444759206799 -172.8045325779037 -130.3116147308782 -172.8045325779037 -130.3116147308782 -175.6373937677054 -127.47875354107649 -175.6373937677054 -124.6458923512748 -175.6373937677054 -124.6458923512748 -175.6373937677054 -121.8130311614731 -175.6373937677054 -121.8130311614731 -175.6373937677054 -118.98016997167142 -175.6373937677054 -116.1473087818697 -175.6373937677054 -113.31444759206798 -175.6373937677054 -113.31444759206798 -175.6373937677054 -110.48158640226629 -175.6373937677054 -107.6487252124646 -175.6373937677054 -107.6487252124646 -175.6373937677054 -104.81586402266291 -175.6373937677054 -101.98300283286122 -175.6373937677054 -101.98300283286122 -175.6373937677054 -101.98300283286122 -175.6373937677054 -101.98300283286122 -175.6373937677054 -99.1501416430595 -175.6373937677054 -99.1501416430595 -175.6373937677054 -99.1501416430595 -175.6373937677054 -96.31728045325778 -175.6373937677054 -96.31728045325778 -175.6373937677054 -96.31728045325778 -178.47025495750708 -93.48441926345609 -178.47025495750708 -93.48441926345609 -178.47025495750708 -90.6515580736544 -178.47025495750708 -90.6515580736544 -181.3031161473088 -87.81869688385271 -181.3031161473088 -87.81869688385271 -181.3031161473088 -84.98583569405102 -181.3031161473088 -82.1529745042493 -181.3031161473088 -79.32011331444761 -181.3031161473088 -76.48725212464589 -181.3031161473088 -76.48725212464589 -181.3031161473088 -76.48725212464589 -181.3031161473088 -73.6543909348442 -181.3031161473088 -73.6543909348442 -181.3031161473088 -70.82152974504251 -181.3031161473088 -70.82152974504251 -181.3031161473088 -67.98866855524079 -181.3031161473088 -67.98866855524079 -181.3031161473088 -67.98866855524079 -181.3031161473088 -65.1558073654391 -181.3031161473088 -62.32294617563741 -178.47025495750708 -59.49008498583572 -178.47025495750708 -59.49008498583572 -178.47025495750708 -56.65722379603403 -178.47025495750708 -56.65722379603403 -178.47025495750708 -56.65722379603403 -178.47025495750708 -53.824362606232285 -178.47025495750708 -53.824362606232285 -178.47025495750708 -50.991501416430594 -178.47025495750708 -50.991501416430594 -178.47025495750708 -48.158640226628904 -178.47025495750708 -48.158640226628904 -178.47025495750708 -45.3257790368272 -178.47025495750708 -45.3257790368272 -178.47025495750708 -42.49291784702551 -178.47025495750708 -39.660056657223805 -178.47025495750708 -39.660056657223805 -178.47025495750708 -36.8271954674221 -178.47025495750708 -36.8271954674221 -178.47025495750708 -33.99433427762041 -178.47025495750708 -33.99433427762041 -178.47025495750708 -28.328611898017 -178.47025495750708 -28.328611898017 -178.47025495750708 -25.49575070821531 -178.47025495750708 -22.662889518413607 -178.47025495750708 -22.662889518413607 -178.47025495750708 -19.830028328611917 -178.47025495750708 -19.830028328611917 -178.47025495750708 -16.997167138810198 -175.6373937677054 -16.997167138810198 -175.6373937677054 -16.997167138810198 -175.6373937677054 -14.164305949008508 -175.6373937677054 -14.164305949008508 -175.6373937677054 -14.164305949008508 -175.6373937677054 -11.331444759206818 -175.6373937677054 -11.331444759206818 -175.6373937677054 -8.498583569405099 -175.6373937677054 -8.498583569405099 -175.6373937677054 -8.498583569405099 -175.6373937677054 -8.498583569405099 -175.6373937677054 -5.665722379603409 -175.6373937677054 -5.665722379603409 -175.6373937677054 -2.8328611898017186 -175.6373937677054 -1.4210854715202004e-14 -172.8045325779037 -1.4210854715202004e-14 -172.8045325779037 2.83286118980169 -172.8045325779037 2.83286118980169 -172.8045325779037 5.665722379603395 -172.8045325779037 5.665722379603395 -172.8045325779037 8.498583569405085 -172.8045325779037 8.498583569405085 -172.8045325779037 8.498583569405085 -172.8045325779037 8.498583569405085 -172.8045325779037 11.331444759206775 -172.8045325779037 11.331444759206775 -172.8045325779037 16.99716713881019 -172.8045325779037 16.99716713881019 -172.8045325779037 19.83002832861189 -172.8045325779037 22.662889518413586 -172.8045325779037 25.49575070821529 -172.8045325779037 25.49575070821529 -172.8045325779037 28.328611898016987 -169.97167138810198 31.161473087818692 -169.97167138810198 36.82719546742209 -167.1388101983003 42.49291784702549 -167.1388101983003 45.32577903682718 -167.1388101983003 48.15864022662889 -164.3059490084986 53.824362606232285 -164.3059490084986 56.65722379603398 -164.3059490084986 56.65722379603398 -164.3059490084986 59.49008498583568 -164.3059490084986 62.322946175637384 -161.47308781869688 62.322946175637384 -161.47308781869688 65.15580736543909 -161.47308781869688 65.15580736543909 -161.47308781869688 67.98866855524078 -161.47308781869688 67.98866855524078 -161.47308781869688 70.82152974504248 -158.6402266288952 70.82152974504248 -158.6402266288952 73.65439093484419 -158.6402266288952 76.48725212464588 -158.6402266288952 76.48725212464588 -155.8073654390935 79.32011331444758 -155.8073654390935 82.15297450424929 -152.97450424929178 84.98583569405098 -150.1416430594901 90.65155807365439 -150.1416430594901 90.65155807365439 -147.3087818696884 93.48441926345608 -147.3087818696884 96.31728045325778 -144.47592067988668 99.15014164305948 -141.643059490085 101.98300283286119 -138.81019830028328 104.81586402266288 -135.97733711048159 107.64872521246458 -133.1444759206799 107.64872521246458 -130.3116147308782 113.31444759206798 -124.6458923512748 116.14730878186967 -121.8130311614731 121.81303116147308 -110.4815864022663 127.47875354107647 -104.8158640226629 133.14447592067987 -99.1501416430595 135.97733711048159 -93.48441926345609 138.81019830028328 -87.81869688385271 141.64305949008497 -84.98583569405099 144.47592067988666 -82.1529745042493 147.3087818696884 -82.1529745042493 150.1416430594901 -76.4872521246459 152.97450424929178 -76.4872521246459 155.80736543909347 -70.8215297450425 155.80736543909347 -70.8215297450425 158.64022662889516 -67.9886685552408 161.47308781869688 -65.1558073654391 164.30594900849857 -62.3229461756374 164.30594900849857 -59.49008498583571 167.13881019830026 -56.657223796034 167.13881019830026 -56.657223796034 167.13881019830026 -53.82436260623231 167.13881019830026 -53.82436260623231 167.13881019830026 -53.82436260623231 167.13881019830026 -48.158640226628876 167.13881019830026 -45.325779036827186 167.13881019830026 -39.660056657223805 167.13881019830026 -31.161473087818706 167.13881019830026 -28.328611898017016 167.13881019830026 -25.495750708215297 167.13881019830026 -22.662889518413607 167.13881019830026 -22.662889518413607 167.13881019830026 -16.997167138810198 167.13881019830026 -14.164305949008508 167.13881019830026 -11.331444759206818 167.13881019830026 -8.498583569405127 167.13881019830026 -2.83286118980169 167.13881019830026 0 167.13881019830026 5.66572237960338 167.13881019830026 11.33144475920679 167.13881019830026 16.997167138810198 164.30594900849857 19.83002832861189 164.30594900849857 19.83002832861189 164.30594900849857 19.83002832861189 164.30594900849857 22.66288951841358 161.47308781869688 22.66288951841358 158.64022662889516 25.495750708215297 158.64022662889516 28.328611898016987 158.64022662889516 28.328611898016987 155.80736543909347 31.161473087818678 155.80736543909347 31.161473087818678 152.97450424929178 33.99433427762037 150.1416430594901 36.82719546742209 150.1416430594901 39.660056657223805 144.47592067988666 42.492917847025495 144.47592067988666 45.325779036827186 138.81019830028328 50.991501416430566 135.97733711048159 50.991501416430566 130.31161473087818 56.657223796034 127.47875354107647 59.49008498583569 121.81303116147308 62.322946175637384 118.98016997167139 65.15580736543907 116.14730878186967 67.98866855524079 113.31444759206798 70.82152974504248 110.48158640226627 73.65439093484417 110.48158640226627 76.48725212464586 107.64872521246458 79.32011331444755 104.81586402266288 79.32011331444755 104.81586402266288 79.32011331444755 104.81586402266288 82.15297450424924 101.98300283286119 82.15297450424924 99.15014164305948 84.98583569405093 99.15014164305948 87.81869688385274 96.31728045325778 87.81869688385274 93.48441926345608 90.65155807365443 90.65155807365439 90.65155807365443 87.81869688385268 96.31728045325781 84.98583569405098 99.1501416430595 82.15297450424929 101.98300283286119 76.48725212464588 104.81586402266288 76.48725212464588 107.64872521246457 73.65439093484419 110.48158640226626 70.82152974504248 113.31444759206795 67.98866855524078 113.31444759206795 65.15580736543909 116.1473087818697 62.322946175637384 118.98016997167139 56.65722379603398 121.81303116147308 53.824362606232285 124.64589235127477 50.99150141643058 127.47875354107646 48.15864022662889 127.47875354107646 45.32577903682718 130.3116147308782 42.49291784702549 133.1444759206799 39.660056657223784 135.97733711048159 33.99433427762038 138.81019830028328 28.328611898016987 141.64305949008497 25.49575070821529 144.4759206798867 22.662889518413586 144.4759206798867 19.83002832861189 147.3087818696884 19.83002832861189 147.3087818696884 14.164305949008494 150.1416430594901 11.331444759206775 152.97450424929178 8.498583569405085 152.97450424929178 5.665722379603395 155.80736543909347 2.83286118980169 155.80736543909347 -1.4210854715202004e-14 155.80736543909347 -2.8328611898017186 158.64022662889516 -5.665722379603409 161.47308781869685 -8.498583569405099 161.47308781869685 -11.331444759206818 161.47308781869685 -14.164305949008508 164.30594900849854 -14.164305949008508 164.30594900849854 -16.997167138810198 164.30594900849854 -16.997167138810198 167.13881019830023 -19.830028328611917 167.13881019830023 -22.662889518413607 169.97167138810198 -25.49575070821531 169.97167138810198 -25.49575070821531 169.97167138810198 -28.328611898017 172.80453257790367 -28.328611898017 172.80453257790367 -31.161473087818706 172.80453257790367 -33.99433427762041 175.63739376770542 -33.99433427762041 175.63739376770542 -36.8271954674221 178.4702549575071 -39.660056657223805 178.4702549575071 -39.660056657223805 178.4702549575071 -39.660056657223805 178.4702549575071 -39.660056657223805 178.4702549575071 -42.49291784702551 178.4702549575071 -42.49291784702551 181.3031161473088 -45.3257790368272 181.3031161473088 -48.158640226628904 181.3031161473088 -48.158640226628904 181.3031161473088 -50.991501416430594 181.3031161473088 -50.991501416430594 181.3031161473088 -53.824362606232285 181.3031161473088 -53.824362606232285 181.3031161473088 -56.65722379603403 181.3031161473088 -59.49008498583572 181.3031161473088 -59.49008498583572 181.3031161473088 -62.32294617563741 181.3031161473088 -65.1558073654391 181.3031161473088 -67.98866855524079 181.3031161473088 -67.98866855524079 181.3031161473088 -70.82152974504251 181.3031161473088 -70.82152974504251 181.3031161473088 -73.6543909348442 181.3031161473088 -73.6543909348442 181.3031161473088 -73.6543909348442 181.3031161473088 -76.48725212464589 181.3031161473088 -76.48725212464589 181.3031161473088 -76.48725212464589 181.3031161473088 -79.32011331444761 181.3031161473088 -79.32011331444761 181.3031161473088"></markup_element></metadata><path id="markup" d="M -87.81869688385271 178.4702549575071 l -2.83286118980169 0 l -2.83286118980169 -2.83286118980169 l -2.83286118980169 0 l -2.8328611898017186 -2.832861189801747 l 0 0 l -2.8328611898017186 0 l 0 -2.83286118980169 l 0 0 l -2.83286118980169 0 l -2.83286118980169 -2.832861189801747 l 0 0 l -2.83286118980169 -2.83286118980169 l -2.83286118980169 0 l 0 -2.83286118980169 l 0 0 l -2.8328611898017186 -2.83286118980169 l 0 0 l -2.8328611898017186 -2.83286118980169 l 0 0 l 0 -2.83286118980169 l -2.83286118980169 0 l 0 0 l -2.83286118980169 -2.83286118980169 l 0 0 l -2.83286118980169 -2.83286118980169 l 0 0 l 0 0 l 0 -2.83286118980169 l -2.8328611898017186 -2.832861189801747 l 0 -2.83286118980169 l 0 0 l -2.83286118980169 -2.83286118980169 l -2.83286118980169 -2.83286118980169 l 0 -2.83286118980169 l 0 -2.832861189801747 l 0 0 l 0 -2.83286118980169 l -2.83286118980169 -2.83286118980169 l -2.8328611898017186 -2.83286118980169 l -2.8328611898017186 -5.665722379603437 l 0 -2.83286118980169 l -2.83286118980169 -2.83286118980169 l 0 -2.83286118980169 l 0 0 l 0 -2.83286118980169 l 0 0 l 0 -2.83286118980169 l 0 -2.83286118980169 l 0 0 l 0 -2.83286118980169 l -2.83286118980169 -2.83286118980169 l 0 -2.83286118980169 l 0 0 l 0 -2.832861189801804 l 0 -2.83286118980169 l 0 0 l 0 -2.83286118980169 l 0 -2.83286118980169 l -2.83286118980169 -5.66572237960338 l 0 0 l 0 -2.83286118980169 l 0 -2.8328611898017186 l -2.83286118980169 -5.66572237960338 l 0 -5.665722379603409 l 0 -5.665722379603409 l -2.8328611898017186 -5.66572237960338 l 0 -2.83286118980169 l 0 -2.8328611898017186 l 0 -2.8328611898017186 l 0 -5.66572237960338 l -2.8328611898017186 -5.665722379603409 l 0 -2.83286118980169 l 0 -2.83286118980169 l 0 -2.83286118980169 l 0 -5.665722379603437 l 0 -2.83286118980169 l -2.83286118980169 -5.66572237960338 l 0 -2.83286118980169 l 0 -2.8328611898017186 l 0 -2.8328611898017186 l 0 -2.83286118980169 l 0 -2.83286118980169 l 0 -2.83286118980169 l -2.83286118980169 -8.498583569405099 l 0 -2.8328611898017186 l 0 -5.66572237960338 l 0 -5.665722379603409 l 0 -5.66572237960338 l 0 -5.665722379603437 l 0 -5.66572237960338 l 0 -5.665722379603395 l 0 -5.665722379603409 l 0 -2.83286118980169 l 0 -8.498583569405099 l 0 -5.665722379603395 l 0 -2.8328611898017186 l 0 -5.66572237960338 l 0 -2.8328611898017186 l 0 -2.83286118980169 l 0 -2.83286118980169 l 0 -2.8328611898017044 l 0 -2.8328611898017044 l 0 0 l 0 -2.8328611898017044 l 0 0 l 0 -2.83286118980169 l 0 0 l 0 -2.83286118980169 l 0 -2.8328611898017186 l 0 -5.665722379603395 l 0 -2.83286118980169 l 2.83286118980169 -2.8328611898017186 l 0 0 l 0 -2.83286118980169 l 0 0 l 0 0 l 2.83286118980169 -2.83286118980169 l 0 -2.83286118980169 l 2.8328611898017186 -2.8328611898017186 l 0 0 l 0 -2.83286118980169 l 0 0 l 2.8328611898017186 -2.8328611898017186 l 0 -2.83286118980169 l 2.83286118980169 -2.83286118980169 l 0 -2.8328611898017186 l 2.83286118980169 -5.66572237960338 l 0 0 l 0 -2.8328611898017186 l 0 0 l 0 0 l 2.83286118980169 0 l 0 -2.83286118980169 l 0 0 l 0 0 l 2.83286118980169 0 l 0 0 l 2.8328611898017186 -2.83286118980169 l 0 0 l 2.8328611898017186 -2.8328611898017186 l 2.83286118980169 0 l 0 0 l 2.83286118980169 0 l 2.83286118980169 0 l 0 -2.83286118980169 l 2.8328611898017186 0 l 2.83286118980169 0 l 0 0 l 2.83286118980169 0 l 0 0 l 2.83286118980169 0 l 2.8328611898017186 0 l 2.8328611898017186 0 l 0 0 l 2.83286118980169 0 l 2.83286118980169 0 l 0 0 l 2.83286118980169 0 l 2.83286118980169 0 l 0 0 l 0 0 l 0 0 l 2.8328611898017186 0 l 0 0 l 0 0 l 2.8328611898017186 0 l 0 0 l 0 -2.83286118980169 l 2.83286118980169 0 l 0 0 l 2.83286118980169 0 l 0 -2.8328611898017186 l 2.83286118980169 0 l 0 0 l 2.83286118980169 0 l 2.8328611898017186 0 l 2.83286118980169 0 l 2.8328611898017186 0 l 0 0 l 0 0 l 2.83286118980169 0 l 0 0 l 2.83286118980169 0 l 0 0 l 2.8328611898017186 0 l 0 0 l 0 0 l 2.83286118980169 0 l 2.83286118980169 2.8328611898017186 l 2.83286118980169 0 l 0 0 l 2.83286118980169 0 l 0 0 l 0 0 l 2.832861189801747 0 l 0 0 l 2.83286118980169 0 l 0 0 l 2.83286118980169 0 l 0 0 l 2.8328611898017044 0 l 0 0 l 2.83286118980169 0 l 2.8328611898017044 0 l 0 0 l 2.8328611898017044 0 l 0 0 l 2.83286118980169 0 l 0 0 l 5.665722379603409 0 l 0 0 l 2.83286118980169 0 l 2.8328611898017044 0 l 0 0 l 2.83286118980169 0 l 0 0 l 2.8328611898017186 2.83286118980169 l 0 0 l 0 0 l 2.83286118980169 0 l 0 0 l 0 0 l 2.83286118980169 0 l 0 0 l 2.8328611898017186 0 l 0 0 l 0 0 l 0 0 l 2.83286118980169 0 l 0 0 l 2.83286118980169 0 l 2.8328611898017044 2.83286118980169 l 0 0 l 2.8328611898017044 0 l 0 0 l 2.8328611898017044 0 l 0 0 l 2.83286118980169 0 l 0 0 l 0 0 l 0 0 l 2.83286118980169 0 l 0 0 l 5.665722379603416 0 l 0 0 l 2.8328611898016973 0 l 2.8328611898016973 0 l 2.8328611898017044 0 l 0 0 l 2.8328611898016973 2.8328611898017186 l 2.8328611898017044 0 l 5.665722379603395 2.83286118980169 l 5.665722379603402 0 l 2.83286118980169 0 l 2.8328611898017115 2.83286118980169 l 5.665722379603395 0 l 2.8328611898016973 0 l 0 0 l 2.8328611898016973 0 l 2.8328611898017044 2.8328611898017186 l 0 0 l 2.8328611898017044 0 l 0 0 l 2.83286118980169 0 l 0 0 l 2.8328611898017044 2.83286118980169 l 0 0 l 2.8328611898017044 0 l 2.83286118980169 0 l 0 2.83286118980169 l 2.8328611898017044 0 l 2.8328611898017044 2.8328611898017186 l 2.83286118980169 2.83286118980169 l 5.665722379603409 0 l 0 2.83286118980169 l 2.83286118980169 0 l 2.8328611898017044 2.8328611898017186 l 2.8328611898017044 2.83286118980169 l 2.8328611898017044 2.8328611898017186 l 2.83286118980169 2.83286118980169 l 2.8328611898017044 2.83286118980169 l 0 2.83286118980169 l 5.665722379603395 5.665722379603409 l 2.83286118980169 2.83286118980169 l 5.665722379603409 11.331444759206803 l 5.665722379603395 5.665722379603409 l 5.665722379603395 5.665722379603395 l 2.8328611898017186 5.665722379603409 l 2.83286118980169 5.66572237960338 l 2.83286118980169 2.8328611898017186 l 2.83286118980169 2.83286118980169 l 2.832861189801747 0 l 2.83286118980169 5.665722379603395 l 2.83286118980169 0 l 2.83286118980169 5.665722379603409 l 0 0 l 2.83286118980169 2.83286118980169 l 2.8328611898017186 2.8328611898017044 l 2.83286118980169 2.8328611898017044 l 0 2.83286118980169 l 2.83286118980169 2.8328611898017044 l 0 0 l 0 2.83286118980169 l 0 0 l 0 0 l 0 5.665722379603437 l 0 2.83286118980169 l 0 5.66572237960338 l 0 8.498583569405099 l 0 2.83286118980169 l 0 2.8328611898017186 l 0 2.83286118980169 l 0 0 l 0 5.665722379603409 l 0 2.83286118980169 l 0 2.83286118980169 l 0 2.83286118980169 l 0 5.665722379603437 l 0 2.83286118980169 l 0 5.66572237960338 l 0 5.665722379603409 l 0 5.665722379603409 l -2.83286118980169 2.83286118980169 l 0 0 l 0 0 l 0 2.83286118980169 l -2.83286118980169 0 l -2.8328611898017186 2.8328611898017186 l 0 2.83286118980169 l 0 0 l -2.83286118980169 2.83286118980169 l 0 0 l -2.83286118980169 2.83286118980169 l -2.83286118980169 2.8328611898017186 l 0 2.8328611898017186 l -5.665722379603437 2.83286118980169 l 0 2.83286118980169 l -5.66572237960338 5.66572237960338 l -2.83286118980169 0 l -5.665722379603409 5.665722379603437 l -2.8328611898017044 2.83286118980169 l -5.665722379603395 2.83286118980169 l -2.83286118980169 2.83286118980169 l -2.8328611898017186 2.8328611898017186 l -2.83286118980169 2.83286118980169 l -2.8328611898017044 2.83286118980169 l 0 2.83286118980169 l -2.83286118980169 2.83286118980169 l -2.8328611898017044 0 l 0 0 l 0 2.83286118980169 l -2.83286118980169 0 l -2.8328611898017044 2.83286118980169 l 0 2.832861189801804 l -2.8328611898017044 0 l -2.8328611898017044 2.83286118980169 l -2.83286118980169 0 l -2.8328611898017044 5.66572237960338 l -2.8328611898017044 2.83286118980169 l -2.83286118980169 2.83286118980169 l -5.665722379603409 2.83286118980169 l 0 2.83286118980169 l -2.83286118980169 2.83286118980169 l -2.8328611898017044 2.83286118980169 l -2.8328611898017044 0 l -2.83286118980169 2.832861189801747 l -2.8328611898017044 2.83286118980169 l -5.665722379603402 2.83286118980169 l -2.8328611898016973 2.83286118980169 l -2.8328611898017044 2.83286118980169 l -2.83286118980169 0 l -2.8328611898017115 2.832861189801747 l -2.83286118980169 2.83286118980169 l -2.8328611898017044 2.83286118980169 l -5.665722379603402 2.83286118980169 l -5.665722379603395 2.83286118980169 l -2.8328611898016973 2.832861189801747 l -2.8328611898017044 0 l -2.8328611898016973 2.83286118980169 l 0 0 l -5.665722379603395 2.83286118980169 l -2.8328611898017186 2.83286118980169 l -2.83286118980169 0 l -2.83286118980169 2.83286118980169 l -2.8328611898017044 0 l -2.8328611898017044 0 l -2.8328611898017044 2.83286118980169 l -2.83286118980169 2.83286118980169 l -2.83286118980169 0 l -2.8328611898017186 0 l -2.83286118980169 2.83286118980169 l 0 0 l -2.83286118980169 0 l 0 2.83286118980169 l -2.8328611898017186 0 l -2.83286118980169 2.832861189801747 l -2.8328611898017044 0 l 0 0 l -2.83286118980169 2.83286118980169 l 0 0 l -2.8328611898017044 0 l -2.8328611898017044 2.832861189801747 l 0 0 l -2.83286118980169 2.83286118980169 l -2.8328611898017044 0 l 0 0 l 0 0 l 0 0 l -2.8328611898017044 0 l 0 2.83286118980169 l -2.83286118980169 0 l -2.8328611898017044 0 l 0 0 l -2.83286118980169 0 l 0 0 l -2.83286118980169 0 l 0 0 l -2.832861189801747 0 l -2.83286118980169 0 l 0 0 l -2.83286118980169 0 l -2.83286118980169 0 l -2.83286118980169 0 l 0 0 l -2.8328611898017186 0 l 0 0 l -2.83286118980169 0 l 0 0 l 0 0 l -2.83286118980169 0 l 0 0 l 0 0 l -2.8328611898017186 0 l 0 0" stroke-width="14.164305949008508" stroke-linejoin="round" stroke-linecap="square" stroke="rgba(255,0,0,0.75)" fill="none" transform="translate( -79.32011331444758 , 184.1359773371105 ) rotate( 0 )" style="mix-blend-mode: normal"/></g><g cursor="inherit" pointer-events="stroke"><metadata><markup_element xmlns="http://www.w3.org/1999/xhtml" stroke-width="14.164305949008508" stroke-color="#ff0000" stroke-opacity="0.75" type="freehand" position="-257.79036827195466 567.9886685552408" size="226.62889518413598 314.44759206798875" rotation="0" locations="33.99433427762037 -157.22379603399435 31.161473087818678 -157.22379603399435 22.662889518413607 -157.22379603399435 14.16430594900848 -157.22379603399435 8.498583569405099 -154.39093484419266 2.83286118980169 -151.5580736543909 -5.66572237960338 -148.72521246458922 -11.33144475920676 -145.89235127478753 -14.164305949008565 -143.05949008498584 -19.830028328611945 -140.22662889518415 -22.662889518413635 -137.39376770538246 -28.328611898017016 -134.56090651558077 -33.994334277620396 -128.89518413597733 -39.66005665722378 -123.2294617563739 -48.158640226628904 -117.56373937677051 -53.824362606232285 -111.89801699716713 -56.65722379603403 -106.23229461756375 -65.1558073654391 -100.56657223796037 -70.82152974504254 -94.90084985835693 -73.65439093484423 -86.40226628895181 -79.32011331444761 -77.90368271954674 -84.98583569405099 -72.23796033994336 -87.81869688385268 -66.57223796033998 -93.48441926345606 -58.07365439093485 -96.31728045325781 -46.74220963172809 -99.1501416430595 -38.24362606232296 -101.98300283286125 -29.745042492917946 -107.64872521246463 -21.246458923512705 -107.64872521246463 -12.747875354107578 -110.48158640226632 -7.082152974504197 -113.314447592068 4.249291784702564 -113.314447592068 18.41359773371107 -113.314447592068 32.57790368271958 -113.314447592068 43.90934844192634 -110.48158640226632 49.57507082152972 -110.48158640226632 55.2407932011331 -107.64872521246463 55.2407932011331 -104.81586402266294 58.07365439093485 -101.98300283286125 60.906515580736595 -93.48441926345606 63.73937677053834 -82.1529745042493 66.57223796033998 -76.48725212464592 69.40509915014172 -70.82152974504254 69.40509915014172 -65.1558073654391 72.23796033994336 -59.49008498583572 72.23796033994336 -53.824362606232285 72.23796033994336 -45.325779036827214 72.23796033994336 -36.82719546742209 72.23796033994336 -28.328611898017016 72.23796033994336 -22.662889518413635 72.23796033994336 -16.997167138810255 75.0708215297451 -16.997167138810255 75.0708215297451 -14.164305949008565 75.0708215297451 -11.33144475920676 75.0708215297451 -11.33144475920676 75.0708215297451 -8.49858356940507 75.0708215297451 -5.66572237960338 75.0708215297451 -5.66572237960338 75.0708215297451 -5.66572237960338 75.0708215297451 -2.83286118980169 75.0708215297451 -2.83286118980169 75.0708215297451 0 75.0708215297451 0 75.0708215297451 0 77.90368271954674 2.83286118980169 77.90368271954674 2.83286118980169 77.90368271954674 5.66572237960338 80.73654390934848 8.498583569405099 80.73654390934848 11.33144475920679 83.56940509915012 11.33144475920679 86.40226628895186 16.99716713881017 89.23512747875361 16.99716713881017 92.06798866855524 19.83002832861189 92.06798866855524 22.662889518413607 94.90084985835699 22.662889518413607 94.90084985835699 25.495750708215297 97.73371104815863 25.495750708215297 100.56657223796037 28.328611898016987 103.399433427762 31.161473087818678 109.06515580736539 33.99433427762037 109.06515580736539 33.99433427762037 111.89801699716713 33.99433427762037 111.89801699716713 36.82719546742209 111.89801699716713 36.82719546742209 114.73087818696877 39.660056657223805 117.56373937677051 42.492917847025495 120.39660056657226 48.158640226628876 123.2294617563739 50.991501416430594 123.2294617563739 53.824362606232285 128.89518413597727 56.657223796033975 131.72804532577902 65.1558073654391 137.3937677053824 70.82152974504248 143.0594900849859 73.65439093484417 145.89235127478753 76.48725212464586 148.72521246458928 76.48725212464586 148.72521246458928 79.32011331444758 148.72521246458928 79.32011331444758 148.72521246458928 82.1529745042493 148.72521246458928 82.1529745042493 148.72521246458928 84.98583569405099 151.55807365439102 87.81869688385268 151.55807365439102 90.65155807365437 154.39093484419266 93.48441926345606 154.39093484419266 96.31728045325778 154.39093484419266 99.15014164305947 154.39093484419266 101.98300283286119 154.39093484419266 104.81586402266288 154.39093484419266 107.64872521246457 154.39093484419266 110.48158640226629 154.39093484419266 110.48158640226629 154.39093484419266 113.31444759206798 157.2237960339944 113.31444759206798 157.2237960339944 113.31444759206798 157.2237960339944 113.31444759206798 157.2237960339944"></markup_element></metadata><path id="markup" d="M 33.99433427762037 -157.22379603399435 l -2.83286118980169 0 l -8.49858356940507 0 l -8.498583569405127 0 l -5.66572237960338 2.83286118980169 l -5.665722379603409 2.832861189801747 l -8.49858356940507 2.83286118980169 l -5.66572237960338 2.83286118980169 l -2.832861189801804 2.83286118980169 l -5.66572237960338 2.83286118980169 l -2.83286118980169 2.83286118980169 l -5.66572237960338 2.83286118980169 l -5.66572237960338 5.665722379603437 l -5.66572237960338 5.665722379603437 l -8.498583569405127 5.66572237960338 l -5.66572237960338 5.66572237960338 l -2.832861189801747 5.66572237960338 l -8.49858356940507 5.66572237960338 l -5.665722379603437 5.665722379603437 l -2.83286118980169 8.498583569405127 l -5.66572237960338 8.49858356940507 l -5.66572237960338 5.66572237960338 l -2.83286118980169 5.66572237960338 l -5.66572237960338 8.498583569405127 l -2.832861189801747 11.33144475920676 l -2.83286118980169 8.498583569405127 l -2.832861189801747 8.498583569405014 l -5.66572237960338 8.498583569405241 l 0 8.498583569405127 l -2.83286118980169 5.66572237960338 l -2.83286118980169 11.33144475920676 l 0 14.164305949008508 l 0 14.164305949008508 l 0 11.33144475920676 l 2.83286118980169 5.66572237960338 l 0 5.66572237960338 l 2.83286118980169 0 l 2.83286118980169 2.832861189801747 l 2.83286118980169 2.832861189801747 l 8.498583569405184 2.832861189801747 l 11.33144475920676 2.8328611898016334 l 5.66572237960338 2.832861189801747 l 5.66572237960338 0 l 5.665722379603437 2.8328611898016334 l 5.66572237960338 0 l 5.665722379603437 0 l 8.49858356940507 0 l 8.498583569405127 0 l 8.49858356940507 0 l 5.66572237960338 0 l 5.66572237960338 2.832861189801747 l 0 0 l 2.83286118980169 0 l 2.832861189801804 0 l 0 0 l 2.83286118980169 0 l 2.83286118980169 0 l 0 0 l 0 0 l 2.83286118980169 0 l 0 0 l 2.83286118980169 0 l 0 0 l 0 2.8328611898016334 l 2.83286118980169 0 l 0 0 l 2.83286118980169 2.832861189801747 l 2.8328611898017186 0 l 2.83286118980169 2.8328611898016334 l 0 2.832861189801747 l 5.66572237960338 2.832861189801747 l 0 2.8328611898016334 l 2.8328611898017186 0 l 2.8328611898017186 2.832861189801747 l 0 0 l 2.83286118980169 2.8328611898016334 l 0 2.832861189801747 l 2.83286118980169 2.8328611898016334 l 2.83286118980169 5.66572237960338 l 2.83286118980169 0 l 0 2.832861189801747 l 0 0 l 2.8328611898017186 0 l 0 2.8328611898016334 l 2.8328611898017186 2.832861189801747 l 2.83286118980169 2.832861189801747 l 5.66572237960338 2.8328611898016334 l 2.8328611898017186 0 l 2.83286118980169 5.66572237960338 l 2.83286118980169 2.832861189801747 l 8.498583569405127 5.66572237960338 l 5.66572237960338 5.665722379603494 l 2.83286118980169 2.8328611898016334 l 2.83286118980169 2.832861189801747 l 0 0 l 2.8328611898017186 0 l 0 0 l 2.8328611898017186 0 l 0 0 l 2.83286118980169 2.832861189801747 l 2.83286118980169 0 l 2.83286118980169 2.8328611898016334 l 2.83286118980169 0 l 2.8328611898017186 0 l 2.83286118980169 0 l 2.8328611898017186 0 l 2.83286118980169 0 l 2.83286118980169 0 l 2.8328611898017186 0 l 0 0 l 2.83286118980169 2.832861189801747 l 0 0 l 0 0 l 0 0" stroke-width="14.164305949008508" stroke-linejoin="round" stroke-linecap="square" stroke="rgba(255,0,0,0.75)" fill="none" transform="translate( -257.79036827195466 , 567.9886685552408 ) rotate( 0 )" style="mix-blend-mode: normal"/></g><g cursor="inherit" pointer-events="stroke"><metadata><markup_element xmlns="http://www.w3.org/1999/xhtml" stroke-width="14.164305949008508" stroke-color="#ff0000" stroke-opacity="0.75" type="freehand" position="-188.38526912181305 763.456090651558" size="76.48725212464589 36.82719546742203" rotation="0" locations="-38.24362606232293 18.41359773371107 -35.41076487252124 18.41359773371107 -32.57790368271952 18.41359773371107 -32.57790368271952 18.41359773371107 -26.912181303116114 15.580736543909325 -24.079320113314424 15.580736543909325 -24.079320113314424 12.747875354107691 -21.246458923512733 12.747875354107691 -18.413597733711015 12.747875354107691 -18.413597733711015 12.747875354107691 -12.747875354107634 9.915014164305944 -12.747875354107634 9.915014164305944 -9.915014164305944 7.082152974504197 -7.0821529745042255 7.082152974504197 -4.249291784702507 4.249291784702564 -1.4164305949008167 1.4164305949008167 4.249291784702564 1.4164305949008167 7.082152974504254 -1.4164305949008167 9.915014164305973 -1.4164305949008167 9.915014164305973 -1.4164305949008167 12.747875354107691 -1.4164305949008167 15.580736543909381 -4.249291784702564 18.41359773371107 -7.082152974504197 18.41359773371107 -7.082152974504197 21.246458923512762 -9.915014164305944 24.079320113314452 -9.915014164305944 26.91218130311617 -12.747875354107578 29.74504249291786 -15.580736543909325 29.74504249291786 -15.580736543909325 32.57790368271958 -15.580736543909325 35.41076487252127 -18.413597733710958 35.41076487252127 -18.413597733710958 38.24362606232296 -18.413597733710958 38.24362606232296 -18.413597733710958 38.24362606232296 -18.413597733710958 38.24362606232296 -18.413597733710958"></markup_element></metadata><path id="markup" d="M -38.24362606232293 18.41359773371107 l 2.83286118980169 0 l 2.8328611898017186 0 l 0 0 l 5.665722379603409 -2.832861189801747 l 2.83286118980169 0 l 0 -2.8328611898016334 l 2.83286118980169 0 l 2.8328611898017186 0 l 0 0 l 5.66572237960338 -2.832861189801747 l 0 0 l 2.83286118980169 -2.832861189801747 l 2.8328611898017186 0 l 2.8328611898017186 -2.8328611898016334 l 2.83286118980169 -2.832861189801747 l 5.66572237960338 0 l 2.83286118980169 -2.8328611898016334 l 2.8328611898017186 0 l 0 0 l 2.8328611898017186 0 l 2.83286118980169 -2.832861189801747 l 2.83286118980169 -2.8328611898016334 l 0 0 l 2.83286118980169 -2.832861189801747 l 2.83286118980169 0 l 2.8328611898017186 -2.8328611898016334 l 2.83286118980169 -2.832861189801747 l 0 0 l 2.8328611898017186 0 l 2.83286118980169 -2.8328611898016334 l 0 0 l 2.83286118980169 0 l 0 0 l 0 0 l 0 0" stroke-width="14.164305949008508" stroke-linejoin="round" stroke-linecap="square" stroke="rgba(255,0,0,0.75)" fill="none" transform="translate( -188.38526912181305 , 763.456090651558 ) rotate( 0 )" style="mix-blend-mode: normal"/></g><g cursor="inherit" pointer-events="stroke"><metadata><markup_element xmlns="http://www.w3.org/1999/xhtml" stroke-width="14.164305949008508" stroke-color="#ff0000" stroke-opacity="0.75" type="freehand" position="-143.05949008498584 686.9688385269122" size="2.83286118980169 116.1473087818697" rotation="0" locations="-1.416430594900845 -58.07365439093485 -1.416430594900845 -55.2407932011331 -1.416430594900845 -49.57507082152972 -1.416430594900845 -41.07648725212471 -1.416430594900845 -32.57790368271958 -1.416430594900845 -29.745042492917833 -1.416430594900845 -26.9121813031162 -1.416430594900845 -24.079320113314452 -1.416430594900845 -21.24645892351282 -1.416430594900845 -15.580736543909438 -1.416430594900845 -9.915014164306058 -1.416430594900845 -7.082152974504311 -1.416430594900845 -4.249291784702677 -1.416430594900845 -1.4164305949009304 -1.416430594900845 1.4164305949008167 -1.416430594900845 4.24929178470245 -1.416430594900845 7.082152974504197 -1.416430594900845 9.91501416430583 -1.416430594900845 12.747875354107578 -1.416430594900845 15.580736543909211 -1.416430594900845 18.413597733710958 -1.416430594900845 18.413597733710958 -1.416430594900845 18.413597733710958 -1.416430594900845 21.246458923512705 1.416430594900845 26.912181303116085 1.416430594900845 32.57790368271958 1.416430594900845 35.41076487252121 1.416430594900845 38.24362606232296 1.416430594900845 38.24362606232296 1.416430594900845 38.24362606232296 1.416430594900845 38.24362606232296 1.416430594900845 41.07648725212459 1.416430594900845 43.90934844192634 1.416430594900845 46.742209631727974 1.416430594900845 49.57507082152972 1.416430594900845 49.57507082152972 1.416430594900845 52.407932011331354 1.416430594900845 52.407932011331354 1.416430594900845 52.407932011331354 1.416430594900845 55.2407932011331 1.416430594900845 55.2407932011331 1.416430594900845 55.2407932011331 1.416430594900845 55.2407932011331 1.416430594900845 58.07365439093485"></markup_element></metadata><path id="markup" d="M -1.416430594900845 -58.07365439093485 l 0 2.832861189801747 l 0 5.66572237960338 l 0 8.498583569405014 l 0 8.498583569405127 l 0 2.832861189801747 l 0 2.8328611898016334 l 0 2.832861189801747 l 0 2.8328611898016334 l 0 5.66572237960338 l 0 5.66572237960338 l 0 2.832861189801747 l 0 2.8328611898016334 l 0 2.832861189801747 l 0 2.832861189801747 l 0 2.8328611898016334 l 0 2.832861189801747 l 0 2.8328611898016334 l 0 2.832861189801747 l 0 2.8328611898016334 l 0 2.832861189801747 l 0 0 l 0 0 l 0 2.832861189801747 l 2.83286118980169 5.66572237960338 l 0 5.665722379603494 l 0 2.8328611898016334 l 0 2.832861189801747 l 0 0 l 0 0 l 0 0 l 0 2.8328611898016334 l 0 2.832861189801747 l 0 2.8328611898016334 l 0 2.832861189801747 l 0 0 l 0 2.8328611898016334 l 0 0 l 0 0 l 0 2.832861189801747 l 0 0 l 0 0 l 0 0 l 0 2.832861189801747" stroke-width="14.164305949008508" stroke-linejoin="round" stroke-linecap="square" stroke="rgba(255,0,0,0.75)" fill="none" transform="translate( -143.05949008498584 , 686.9688385269122 ) rotate( 0 )" style="mix-blend-mode: normal"/></g><g cursor="default" pointer-events="painted"><metadata><markup_element xmlns="http://www.w3.org/1999/xhtml" font-size="67.98866855524079" stroke-color="#ff0000" stroke-opacity="1" fill-color="#ff0000" fill-opacity="0" font-family="Arial" font-style="normal" font-weight="normal" type="label" position="150.1416430594901 750.7082152974505" size="509.91501416430594 101.98300283286119" text="Top Chair"></markup_element></metadata><g clip-path="url(#markup-clipper-BE198017-7481-41F5-91A2-68CFBF98F1D6)"><clipPath id="markup-clipper-BE198017-7481-41F5-91A2-68CFBF98F1D6"><rect transform="translate( -104.81586402266288 , 801.6997167138811 ) rotate( 0 ) scale(1,-1)" x="0" y="0" width="314.4475920679887" height="101.98300283286119"/></clipPath><rect id="markup-background" transform="translate( -104.81586402266288 , 801.6997167138811 ) rotate( 0 ) scale(1,-1)" x="0" y="0" width="314.4475920679887" height="101.98300283286119" fill="none"/><text id="markup" alignment-baseline="middle" font-family="Arial" font-size="6798.866855524079" fill="rgba(255,0,0,1)" font-weight="normal" font-style="normal" transform="translate( -104.81586402266288 , 733.7110481586403 ) rotate( 0 ) scale(0.01,-0.01)"><tspan x="0" y="0">Top Chair</tspan></text></g></g></svg>'
      },
      explodeScale: 0,
      transforms: {
        '0': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 37.07633590698242,
            y: 0,
            z: 0
          }
        },
        '628': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: -3.0545217990875244,
            z: 0
          }
        },
        '629': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: -4.821961879730225,
            y: 0,
            z: 0
          }
        },
        '630': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 1.9197484254837036,
            y: 0,
            z: 0
          }
        },
        '631': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: 2.8537797927856445,
            z: 0
          }
        },
        '1035': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: -4.821961879730225,
            y: 0,
            z: 0
          }
        },
        '1036': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 1.9197484254837036,
            y: 0,
            z: 0
          }
        },
        '1037': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: -3.0545217990875244,
            z: 0
          }
        },
        '1038': {
          quaternion: {
            _x: 0,
            _y: 0,
            _z: 0,
            _w: 1
          },
          position: {
            x: 0,
            y: 2.8537797927856445,
            z: 0
          }
        }
      },
      id: '257d39cc4e6c',
      name: 'Conference Room 9'
    }
  ]
};
class ConfiguratorScene extends React.Component {
  constructor(props) {
    super(props);

    this.onError = this.onError.bind(this);
  }

  onError(error) {
    if (error.status === 404) {
      //browserHistory.push('/404')
    } else if (error) {
      console.log('unhandled error:');
      console.log(error);
    }
  }

  render() {
    return (
      <div className="configurator-view">
        <ViewerConfigurator
          setViewerEnv={this.props.setViewerEnv}
          onError={this.onError}
          dbModel={dbModel}
          showLoader={true}
          appState={this.props.appState}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setViewerEnv
};

const mapStateToProps = state => ({
  appState: state
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(ConfiguratorScene);
