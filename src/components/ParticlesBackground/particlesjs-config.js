const particlesConfig= {
  "absorbers": {
      "name": "Absorbers",
      "particles": {
          "number": {
              "value": 300
          },
          "collisions": {
              "enable": true
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": {
                  "min": 0.1,
                  "max": 1
              }
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 2
              }
          },
          "move": {
              "enable": true,
              "speed": 0.5,
              "direction": "top",
              "straight": true,
              "warp": true
          }
      },
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "push": {
                  "quantity": 10
              }
          }
      },
      "absorbers": {
          "draggable": true,
          "size": {
              "value": {
                  "min": 5,
                  "max": 10
              },
              "limit": 10
          },
          "position": {
              "x": 50,
              "y": 50
          }
      },
      "background": {
          "color": "#0d47a1"
      }
  },
  "amongUs": {
      "name": "Among Us",
      "particles": {
          "groups": {
              "z5000": {
                  "number": {
                      "value": 70
                  },
                  "zIndex": {
                      "value": 50
                  }
              },
              "z7500": {
                  "number": {
                      "value": 30
                  },
                  "zIndex": {
                      "value": 75
                  }
              },
              "z2500": {
                  "number": {
                      "value": 50
                  },
                  "zIndex": {
                      "value": 25
                  }
              },
              "z1000": {
                  "number": {
                      "value": 40
                  },
                  "zIndex": {
                      "value": 10
                  }
              }
          },
          "number": {
              "value": 200
          },
          "color": {
              "value": "#fff",
              "animation": {
                  "enable": false,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": 3
          },
          "move": {
              "angle": {
                  "value": 10,
                  "offset": 0
              },
              "enable": true,
              "speed": 5,
              "direction": "right"
          },
          "zIndex": {
              "value": 5,
              "opacityRate": 0.5
          }
      },
      "background": {
          "color": "#000000"
      },
      "emitters": {
          "position": {
              "y": 55,
              "x": -5
          },
          "rate": {
              "delay": 7,
              "quantity": 1
          },
          "size": {
              "width": 0,
              "height": 0
          },
          "particles": {
              "shape": {
                  "type": "images",
                  "options": {
                      "images": {
                          "src": "https://particles.js.org/images/cyan_amongus.png",
                          "width": 500,
                          "height": 634
                      }
                  }
              },
              "size": {
                  "value": 40
              },
              "move": {
                  "speed": 10,
                  "outModes": {
                      "default": "none",
                      "right": "destroy"
                  },
                  "straight": true
              },
              "zIndex": {
                  "value": 0
              },
              "rotate": {
                  "value": {
                      "min": 0,
                      "max": 360
                  },
                  "animation": {
                      "enable": true,
                      "speed": 10,
                      "sync": true
                  }
              }
          }
      }
  },
  "backgroundMask": {
      "name": "Background Mask",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 30
              }
          },
          "links": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 1,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 2,
              "direction": "none"
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "bubble"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "bubble": {
                  "distance": 400,
                  "size": 100,
                  "duration": 2,
                  "opacity": 1
              },
              "push": {
                  "quantity": 4
              }
          }
      },
      "backgroundMask": {
          "enable": true,
          "cover": {
              "value": {
                  "r": 255,
                  "g": 255,
                  "b": 255
              }
          }
      },
      "background": {
          "color": "#ffffff",
          "image": "url('https://particles.js.org/images/background3.jpg')",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "basic": {
      "name": "Basic",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "links": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 6
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "big": {
      "name": "Big Particles",
      "particles": {
          "number": {
              "value": 30
          },
          "color": {
              "value": [
                  "#5bc0eb",
                  "#fde74c",
                  "#9bc53d",
                  "#e55934",
                  "#fa7921"
              ]
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": {
                  "min": 0.4,
                  "max": 0.8
              }
          },
          "size": {
              "value": {
                  "min": 300,
                  "max": 400
              },
              "animation": {
                  "enable": true,
                  "speed": 100,
                  "sync": false
              }
          },
          "move": {
              "enable": true,
              "speed": 10,
              "direction": "top"
          }
      },
      "background": {
          "color": "#ffffff"
      }
  },
  "blackHole": {
      "name": "Black Hole",
      "particles": {
          "number": {
              "value": 1000,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": [
                  "#ffffff",
                  "#77ccff",
                  "#ff3333",
                  "#ffff33"
              ]
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 10
              }
          },
          "links": {
              "enable": false,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 0.5,
              "warp": true
          }
      },
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "push": {
                  "quantity": 4
              }
          }
      },
      "absorbers": {
          "orbits": true,
          "destroy": false,
          "size": {
              "value": 5,
              "limit": 50,
              "density": 1500
          },
          "position": {
              "x": 50,
              "y": 50
          }
      },
      "background": {
          "color": "#000",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "bubble": {
      "name": "Bubble",
      "particles": {
          "number": {
              "value": 6,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#1b1e34"
          },
          "shape": {
              "type": "polygon",
              "options": {
                  "polygon": {
                      "sides": 6
                  }
              }
          },
          "opacity": {
              "value": {
                  "min": 0.3,
                  "max": 0.5
              }
          },
          "size": {
              "value": {
                  "min": 100,
                  "max": 160
              }
          },
          "links": {
              "enable": false,
              "distance": 200,
              "color": "#ffffff",
              "opacity": 1,
              "width": 2
          },
          "move": {
              "enable": true,
              "speed": 8
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "bubble"
              },
              "onClick": {
                  "enable": false,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "duration": 2,
                  "size": 40,
                  "opacity": 0.8,
                  "color": "#ff0000",
                  "mix": true
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#efefef"
      }
  },
  "cards": {
      "name": "Cards",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "reduceDuplicates": true,
          "shape": {
              "type": [
                  "spades",
                  "hearts",
                  "diamonds",
                  "clubs"
              ],
              "options": {
                  "spades": {
                      "particles": {
                          "color": {
                              "value": "#000000"
                          }
                      }
                  },
                  "hearts": {
                      "particles": {
                          "color": {
                              "value": "#ff0000"
                          }
                      }
                  },
                  "diamonds": {
                      "particles": {
                          "color": {
                              "value": "#ff0000"
                          }
                      }
                  },
                  "clubs": {
                      "particles": {
                          "color": {
                              "value": "#000000"
                          }
                      }
                  }
              }
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": 30
          },
          "move": {
              "enable": true,
              "speed": 2
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              }
          }
      },
      "background": {
          "color": "#fff"
      }
  },
  "chars": {
      "name": "Chars",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000"
          },
          "stroke": {
              "width": 1,
              "color": "#ffffff"
          },
          "shape": {
              "type": "char",
              "options": {
                  "char": [
                      {
                          "value": [
                              "t",
                              "s",
                              "P",
                              "a",
                              "r",
                              "t",
                              "i",
                              "c",
                              "l",
                              "e",
                              "s"
                          ],
                          "font": "Verdana",
                          "style": "",
                          "weight": "400",
                          "fill": true
                      },
                      {
                          "value": [
                              "t",
                              "s",
                              "P",
                              "a",
                              "r",
                              "t",
                              "i",
                              "c",
                              "l",
                              "e",
                              "s"
                          ],
                          "font": "Verdana",
                          "style": "",
                          "weight": "400",
                          "fill": false
                      }
                  ]
              }
          },
          "opacity": {
              "value": {
                  "min": 0.1,
                  "max": 0.5
              },
              "animation": {
                  "enable": true,
                  "speed": 1
              }
          },
          "size": {
              "value": 16
          },
          "links": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 2
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse",
                  "parallax": {
                      "enable": false,
                      "force": 60,
                      "smooth": 10
                  }
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#0d47a1"
      }
  },
  "clickPause": {
      "name": "Click Pause",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "links": {
              "enable": true,
              "distance": 100,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 6
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "pause"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#0d47a1"
      }
  },
  "collisionsAbsorb": {
      "name": "Collisions Absorb",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 10,
                  "max": 15
              }
          },
          "links": {
              "enable": false,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "collisions": {
              "enable": true,
              "mode": "absorb",
              "absorb": {
                  "speed": 5
              }
          },
          "move": {
              "enable": true,
              "speed": 2
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": false,
                  "mode": "repulse",
                  "parallax": {
                      "enable": false,
                      "force": 60,
                      "smooth": 10
                  }
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#0d47a1"
      }
  },
  "collisionsBounce": {
      "name": "Collisions Bounce",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "collisions": {
              "enable": true
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 10,
                  "max": 15
              }
          },
          "links": {
              "enable": false,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 10
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": false,
                  "mode": "repulse",
                  "parallax": {
                      "enable": false,
                      "force": 60,
                      "smooth": 10
                  }
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#0d47a1"
      }
  },
  "collisionsDestroy": {
      "name": "Collisions Destroy",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": [
                  "#3998D0",
                  "#2EB6AF",
                  "#A9BD33",
                  "#FEC73B",
                  "#F89930",
                  "#F45623",
                  "#D62E32",
                  "#EB586E",
                  "#9952CF"
              ]
          },
          "destroy": {
              "mode": "split",
              "split": {
                  "count": 1,
                  "factor": {
                      "value": {
                          "min": 4,
                          "max": 9
                      }
                  },
                  "particles": {
                      "collisions": {
                          "enable": false
                      },
                      "destroy": {
                          "mode": "none"
                      },
                      "life": {
                          "count": 1,
                          "duration": {
                              "value": 1
                          }
                      }
                  }
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 10,
                  "max": 15
              }
          },
          "links": {
              "enable": false,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "collisions": {
              "enable": true,
              "mode": "destroy"
          },
          "move": {
              "enable": true,
              "speed": 3
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": false,
                  "mode": "repulse",
                  "parallax": {
                      "enable": false,
                      "force": 60,
                      "smooth": 10
                  }
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 1
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "colorAnimation": {
      "name": "Color Animation",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "count": 1,
                  "enable": true,
                  "speed": 60,
                  "sync": true
              }
          },
          "stroke": {
              "width": 30,
              "color": {
                  "value": "#0000ff",
                  "animation": {
                      "count": 1,
                      "enable": true,
                      "speed": 60,
                      "sync": true
                  }
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": 15
          },
          "move": {
              "enable": true,
              "speed": 6
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "connect": {
      "name": "Connect",
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "push"
              },
              "onHover": {
                  "enable": true,
                  "mode": "connect"
              }
          },
          "modes": {
              "bubble": {
                  "distance": 400,
                  "duration": 2,
                  "opacity": 0.8,
                  "size": 40
              },
              "connect": {
                  "distance": 80,
                  "links": {
                      "opacity": 0.5
                  },
                  "radius": 60
              },
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              },
              "repulse": {
                  "distance": 200,
                  "duration": 0.4
              }
          }
      },
      "particles": {
          "color": {
              "value": "random"
          },
          "links": {
              "blink": false,
              "color": "#ffffff",
              "consent": false,
              "distance": 150,
              "enable": false,
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 6
          },
          "number": {
              "density": {
                  "enable": true
              },
              "limit": {
                  "value": 500
              },
              "value": 300
          },
          "opacity": {
              "value": 0.5
          },
          "shape": {
              "type": "circle"
          },
          "stroke": {
              "color": "#fff",
              "width": 1
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 10
              }
          }
      },
      "polygon": {
          "draw": {
              "enable": false,
              "lineColor": "#ffffff",
              "lineWidth": 0.5
          },
          "move": {
              "radius": 10
          },
          "scale": 1,
          "type": "none",
          "url": ""
      },
      "background": {
          "color": "#000000",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "curlNoise": {
      "name": "Curl Noise",
      "particles": {
          "number": {
              "value": 300
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 360,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": 3
          },
          "move": {
              "path": {
                  "clamp": false,
                  "enable": true,
                  "options": {
                      "step": 250,
                      "speed": 1
                  },
                  "delay": {
                      "value": 0
                  },
                  "generator": "curlNoise"
              },
              "enable": true,
              "speed": 3,
              "trail": {
                  "fill": {
                      "color": "#000"
                  },
                  "enable": true,
                  "length": 1000
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "dataImages": {
      "name": "Data URI Images",
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "push"
              },
              "onHover": {
                  "enable": true,
                  "mode": "bubble",
                  "parallax": {
                      "enable": false,
                      "force": 60,
                      "smooth": 10
                  }
              }
          },
          "modes": {
              "bubble": {
                  "distance": 400,
                  "duration": 2,
                  "opacity": 0.8,
                  "size": 40
              },
              "connect": {
                  "distance": 80,
                  "links": {
                      "opacity": 0.5
                  },
                  "radius": 60
              },
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              },
              "repulse": {
                  "distance": 200,
                  "duration": 0.4
              }
          }
      },
      "particles": {
          "color": {
              "value": "#ffffff"
          },
          "move": {
              "direction": "none",
              "enable": true,
              "speed": 2
          },
          "number": {
              "density": {
                  "enable": true
              },
              "value": 80
          },
          "opacity": {
              "value": 0.5
          },
          "rotate": {
              "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": false
              },
              "direction": "random",
              "value": {
                  "min": 0,
                  "max": 360
              }
          },
          "shape": {
              "options": {
                  "image": [
                      {
                          "name": "apple"
                      },
                      {
                          "name": "basketball"
                      }
                  ]
              },
              "type": "image"
          },
          "size": {
              "value": 16
          }
      },
      "preload": [
          {
              "name": "apple",
              "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACTElEQVRYhe2WzUtUYRTGf+eORZq1aGlESjEzjn2QY5KVYRiEJVngtk2LWljLahdGEeW2rf9AkS6EKKQSFxLoWOEHt1tYluHCFiONTJMz854WGQjpnXdmIArmgbs595zneTjn3ve8UEIJ/zuCd4/vD/a0Nhda7xQl3tPaLOIMi6GpUA6xSep+2rLbmEAHmL0gWwWJK7x4OOFEVMwG7/rza4UaKLOzufEbmu5CpAZAUYALR2qyoyOzzpNCxcFyBN0nBxeMBk4Di6vj2ytpdESsuliUAYDb7c9cRduBL79j8RTvjar+FQMAt04NjTjZzSFUO1Xk/NCMDBQjDrbfwApi0aqK8jsfNtW9nO4DCN07sWd1/6eb6rZ9X46nGsbnk7acVvNz68NRHL0P2ggEAE9EbnR07qgXSPU/+uyKchMIAVmQUYxcqX31drxoA140eNQIQ6zRrb7wlscBJXPWS3SsUZoRpCUc80b8+HOOwAi96+Wd8xKH/bgV7QVq/fh9O+AeCleTMR9zmfSDZgPVkdfup/Xe+/8F2czOYsQBKPPn8DWQTpVPAOki5Jd/pNMTBRvYNzkZBwYLlhcGD7yZXfRLyXkQKTwoXF9y1uY0kNSlPoG5/MWZWzKJ/qINNIzPJw3kvW6NcNXmRLTeZG5DcBg4Zpctw7Uxr8Um03oZKYEuIPFH+NezGgnFuWzLa20gEnOnBGkDvq6EjCoXES4BBgBhQZC2SMydsuXN+zIRi1ZVVEjlmYAwExp7NwbgHQwezCq7kro0kM8mLKGEfwI/AbDUxKelB9HiAAAAAElFTkSuQmCC",
              "width": 32,
              "height": 32
          },
          {
              "name": "basketball",
              "src": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGhlaWdodD0iMTAwcHgiIHdpZHRoPSIxMDBweCI+CjxnPgoJPHBhdGggZD0iTTI4LjEsMzYuNmM0LjYsMS45LDEyLjIsMS42LDIwLjksMS4xYzguOS0wLjQsMTktMC45LDI4LjksMC45YzYuMywxLjIsMTEuOSwzLjEsMTYuOCw2Yy0xLjUtMTIuMi03LjktMjMuNy0xOC42LTMxLjMgICBjLTQuOS0wLjItOS45LDAuMy0xNC44LDEuNEM0Ny44LDE3LjksMzYuMiwyNS42LDI4LjEsMzYuNnoiLz4KCTxwYXRoIGQ9Ik03MC4zLDkuOEM1Ny41LDMuNCw0Mi44LDMuNiwzMC41LDkuNWMtMyw2LTguNCwxOS42LTUuMywyNC45YzguNi0xMS43LDIwLjktMTkuOCwzNS4yLTIzLjFDNjMuNywxMC41LDY3LDEwLDcwLjMsOS44eiIvPgoJPHBhdGggZD0iTTE2LjUsNTEuM2MwLjYtMS43LDEuMi0zLjQsMi01LjFjLTMuOC0zLjQtNy41LTctMTEtMTAuOGMtMi4xLDYuMS0yLjgsMTIuNS0yLjMsMTguN0M5LjYsNTEuMSwxMy40LDUwLjIsMTYuNSw1MS4zeiIvPgoJPHBhdGggZD0iTTksMzEuNmMzLjUsMy45LDcuMiw3LjYsMTEuMSwxMS4xYzAuOC0xLjYsMS43LTMuMSwyLjYtNC42YzAuMS0wLjIsMC4zLTAuNCwwLjQtMC42Yy0yLjktMy4zLTMuMS05LjItMC42LTE3LjYgICBjMC44LTIuNywxLjgtNS4zLDIuNy03LjRjLTUuMiwzLjQtOS44LDgtMTMuMywxMy43QzEwLjgsMjcuOSw5LjgsMjkuNyw5LDMxLjZ6Ii8+Cgk8cGF0aCBkPSJNMTUuNCw1NC43Yy0yLjYtMS02LjEsMC43LTkuNywzLjRjMS4yLDYuNiwzLjksMTMsOCwxOC41QzEzLDY5LjMsMTMuNSw2MS44LDE1LjQsNTQuN3oiLz4KCTxwYXRoIGQ9Ik0zOS44LDU3LjZDNTQuMyw2Ni43LDcwLDczLDg2LjUsNzYuNGMwLjYtMC44LDEuMS0xLjYsMS43LTIuNWM0LjgtNy43LDctMTYuMyw2LjgtMjQuOGMtMTMuOC05LjMtMzEuMy04LjQtNDUuOC03LjcgICBjLTkuNSwwLjUtMTcuOCwwLjktMjMuMi0xLjdjLTAuMSwwLjEtMC4yLDAuMy0wLjMsMC40Yy0xLDEuNy0yLDMuNC0yLjksNS4xQzI4LjIsNDkuNywzMy44LDUzLjksMzkuOCw1Ny42eiIvPgoJPHBhdGggZD0iTTI2LjIsODguMmMzLjMsMiw2LjcsMy42LDEwLjIsNC43Yy0zLjUtNi4yLTYuMy0xMi42LTguOC0xOC41Yy0zLjEtNy4yLTUuOC0xMy41LTktMTcuMmMtMS45LDgtMiwxNi40LTAuMywyNC43ICAgQzIwLjYsODQuMiwyMy4yLDg2LjMsMjYuMiw4OC4yeiIvPgoJPHBhdGggZD0iTTMwLjksNzNjMi45LDYuOCw2LjEsMTQuNCwxMC41LDIxLjJjMTUuNiwzLDMyLTIuMyw0Mi42LTE0LjZDNjcuNyw3Niw1Mi4yLDY5LjYsMzcuOSw2MC43QzMyLDU3LDI2LjUsNTMsMjEuMyw0OC42ICAgYy0wLjYsMS41LTEuMiwzLTEuNyw0LjZDMjQuMSw1Ny4xLDI3LjMsNjQuNSwzMC45LDczeiIvPgo8L2c+Cjwvc3ZnPg==",
              "width": 32,
              "height": 32
          }
      ],
      "background": {
          "color": "#fff",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "delay": {
      "name": "Delay",
      "delay": 5,
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "links": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 6
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "delayColor": {
      "name": "Delay Color",
      "background": {
          "color": {
              "value": "#000"
          }
      },
      "particles": {
          "color": {
              "value": "#f00",
              "animation": {
                  "enable": true,
                  "speed": 50,
                  "sync": true,
                  "delay": {
                      "min": 1,
                      "max": 3
                  }
              }
          },
          "number": {
              "value": 100
          },
          "size": {
              "value": 5
          },
          "opacity": {
              "value": 1
          },
          "move": {
              "enable": true
          },
          "links": {
              "enable": true,
              "color": "random"
          }
      }
  },
  "delayOpacity": {
      "name": "Delay Opacity",
      "background": {
          "color": {
              "value": "#000"
          }
      },
      "particles": {
          "color": {
              "value": "#fff"
          },
          "number": {
              "value": 100
          },
          "opacity": {
              "value": {
                  "max": 1,
                  "min": 0
              },
              "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": true,
                  "delay": {
                      "min": 1,
                      "max": 3
                  },
                  "startValue": "max",
                  "destroy": "min"
              }
          },
          "size": {
              "value": 5
          },
          "move": {
              "enable": true
          }
      }
  },
  "delaySize": {
      "name": "Delay Size",
      "background": {
          "color": {
              "value": "#000"
          }
      },
      "particles": {
          "color": {
              "value": "#fff"
          },
          "number": {
              "value": 100
          },
          "size": {
              "value": {
                  "max": 5,
                  "min": 0
              },
              "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": true,
                  "delay": {
                      "min": 1,
                      "max": 3
                  },
                  "startValue": "max",
                  "destroy": "min"
              }
          },
          "opacity": {
              "value": 1
          },
          "move": {
              "enable": true
          }
      }
  },
  "delayStrokeColor": {
      "name": "Delay Stroke Color",
      "background": {
          "color": {
              "value": "#000"
          }
      },
      "particles": {
          "stroke": {
              "color": {
                  "value": "#f00",
                  "animation": {
                      "enable": true,
                      "speed": 50,
                      "sync": true,
                      "delay": {
                          "min": 1,
                          "max": 3
                      }
                  }
              },
              "width": 3
          },
          "number": {
              "value": 100
          },
          "size": {
              "value": 5
          },
          "opacity": {
              "value": 1
          },
          "color": {
              "value": "transparent"
          },
          "move": {
              "enable": true
          },
          "shape": {
              "type": [
                  "triangle",
                  "circle",
                  "square"
              ]
          }
      }
  },
  "destroy": {
      "name": "Destroy",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 5
              }
          },
          "links": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 2,
              "outModes": "destroy"
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#0d47a1"
      }
  },
  "disappearing": {
      "name": "Disappearing",
      "background": {
          "color": {
              "value": "#000"
          }
      },
      "emitters": {
          "direction": "random",
          "size": {
              "width": 100,
              "height": 100
          },
          "position": {
              "x": 50,
              "y": 50
          },
          "rate": {
              "delay": 0.1,
              "quantity": 10
          }
      },
      "particles": {
          "number": {
              "value": 0
          },
          "color": {
              "value": "random"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": {
                  "min": 0.3,
                  "max": 0.8
              }
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 50
              },
              "animation": {
                  "enable": true,
                  "speed": 30,
                  "sync": true,
                  "startValue": "max",
                  "destroy": "min"
              }
          },
          "move": {
              "enable": true,
              "speed": 5,
              "outModes": "destroy"
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "repulse": {
                  "distance": 100
              },
              "push": {
                  "quantity": 4
              }
          }
      }
  },
  "divEvents": {
      "name": "Div Events",
      "background": {
          "color": "#0d47a1"
      },
      "interactivity": {
          "events": {
              "onDiv": [
                  {
                      "enable": true,
                      "selectors": ".bubble.circle",
                      "mode": "bubble",
                      "type": "circle"
                  },
                  {
                      "enable": true,
                      "selectors": ".repulse.circle",
                      "mode": "repulse",
                      "type": "circle"
                  },
                  {
                      "enable": true,
                      "selectors": ".bubble.rectangle",
                      "mode": "bubble",
                      "type": "rectangle"
                  },
                  {
                      "enable": true,
                      "selectors": ".repulse.rectangle",
                      "mode": "repulse",
                      "type": "rectangle"
                  },
                  {
                      "enable": true,
                      "selectors": ".bounce.circle",
                      "mode": "bounce",
                      "type": "circle"
                  },
                  {
                      "enable": true,
                      "selectors": ".bounce.rectangle",
                      "mode": "bounce",
                      "type": "rectangle"
                  }
              ]
          },
          "modes": {
              "bubble": {
                  "distance": 400,
                  "duration": 2,
                  "opacity": 0.8,
                  "size": 6,
                  "color": "#000000"
              },
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              },
              "repulse": {
                  "distance": 200,
                  "duration": 0.4
              }
          }
      },
      "particles": {
          "color": {
              "value": "#ffffff"
          },
          "links": {
              "color": "#ffffff",
              "distance": 150,
              "enable": true,
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 2
          },
          "number": {
              "density": {
                  "enable": true
              },
              "value": 80
          },
          "opacity": {
              "value": 0.5
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 5
              }
          }
      },
      "detectRetina": true
  },
  "effectBubble": {
      "name": "Effect Bubble",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "effect": {
              "type": "bubble"
          },
          "shape": {
              "type": [
                  "circle",
                  "square"
              ]
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 5,
                  "max": 50
              }
          },
          "move": {
              "enable": true,
              "speed": 6
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "effectTrail": {
      "name": "Effect Trail",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 360,
                  "sync": true
              }
          },
          "effect": {
              "type": "trail",
              "options": {
                  "trail": {
                      "fade": true,
                      "length": {
                          "min": 10,
                          "max": 30
                      }
                  }
              }
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": 10
          },
          "move": {
              "path": {
                  "enable": true,
                  "options": {
                      "size": 32,
                      "draw": false,
                      "increment": 0.004
                  },
                  "generator": "simplexNoise"
              },
              "enable": true,
              "speed": {
                  "min": 6,
                  "max": 15
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "emitter": {
      "name": "Emitter",
      "particles": {
          "number": {
              "value": 100,
              "density": {
                  "enable": false
              }
          },
          "color": {
              "value": "#000"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 5
              }
          },
          "links": {
              "enable": true,
              "distance": 150,
              "color": "#000",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 2
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": false,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "emitter"
              }
          },
          "modes": {
              "emitters": {
                  "life": {
                      "count": 10,
                      "delay": 0.5,
                      "duration": 3
                  },
                  "particles": {
                      "shape": {
                          "type": "star",
                          "polygon": {
                              "sides": 7
                          }
                      },
                      "rotate": {
                          "value": {
                              "min": 0,
                              "max": 360
                          },
                          "direction": "clockwise",
                          "animation": {
                              "enable": true,
                              "speed": 15,
                              "sync": false
                          }
                      },
                      "color": {
                          "value": "#f0f"
                      },
                      "links": {
                          "enable": false
                      },
                      "opacity": {
                          "value": 1
                      },
                      "size": {
                          "value": 15
                      },
                      "move": {
                          "speed": 20,
                          "outModes": "destroy"
                      }
                  }
              },
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#fff"
      },
      "emitters": [
          {
              "life": {
                  "count": 10,
                  "delay": 0.5,
                  "duration": 3
              },
              "particles": {
                  "shape": {
                      "type": "polygon",
                      "polygon": {
                          "sides": 6
                      }
                  },
                  "rotate": {
                      "value": {
                          "min": 0,
                          "max": 360
                      },
                      "direction": "clockwise",
                      "animation": {
                          "enable": true,
                          "speed": 15,
                          "sync": false
                      }
                  },
                  "color": {
                      "value": "#0f0"
                  },
                  "links": {
                      "enable": false
                  },
                  "opacity": {
                      "value": 1
                  },
                  "size": {
                      "value": 15
                  },
                  "move": {
                      "speed": 20,
                      "outModes": "destroy"
                  }
              }
          },
          {
              "direction": "top-right",
              "position": {
                  "x": 0,
                  "y": 100
              },
              "particles": {
                  "shape": {
                      "type": "star"
                  },
                  "color": {
                      "value": "#f00"
                  },
                  "links": {
                      "enable": true,
                      "id": "emitter1",
                      "color": {
                          "value": "#ff7700"
                      }
                  },
                  "opacity": {
                      "value": 0.3
                  },
                  "rotate": {
                      "value": {
                          "min": 0,
                          "max": 360
                      },
                      "direction": "counter-clockwise",
                      "animation": {
                          "enable": true,
                          "speed": 15,
                          "sync": false
                      }
                  },
                  "size": {
                      "value": {
                          "min": 1,
                          "max": 10
                      }
                  },
                  "move": {
                      "speed": 10,
                      "outModes": "destroy"
                  }
              }
          },
          {
              "direction": "top-left",
              "position": {
                  "x": 100,
                  "y": 100
              },
              "particles": {
                  "shape": {
                      "type": "square"
                  },
                  "rotate": {
                      "value": {
                          "min": 0,
                          "max": 360
                      },
                      "direction": "clockwise",
                      "animation": {
                          "enable": true,
                          "speed": 15,
                          "sync": false
                      }
                  },
                  "color": {
                      "value": "#00f"
                  },
                  "links": {
                      "enable": false
                  },
                  "opacity": {
                      "value": 0.8
                  },
                  "size": {
                      "value": 15
                  },
                  "move": {
                      "speed": 20,
                      "outModes": "destroy"
                  }
              }
          }
      ]
  },
  "emitterAbsorber": {
      "name": "Emitter and Absorber",
      "particles": {
          "number": {
              "value": 0
          },
          "color": {
              "value": "#000"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 5
              }
          },
          "links": {
              "enable": true,
              "distance": 150,
              "color": "#000",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 2
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": false,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": false,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#fff",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      },
      "absorbers": {
          "position": {
              "x": 50,
              "y": 50
          },
          "size": {
              "density": 20,
              "value": {
                  "min": 30,
                  "max": 50
              },
              "limit": 100
          }
      },
      "emitters": [
          {
              "direction": "top-right",
              "position": {
                  "x": 0,
                  "y": 100
              },
              "particles": {
                  "shape": {
                      "type": "circle"
                  },
                  "color": {
                      "value": "random"
                  },
                  "links": {
                      "enable": false
                  },
                  "opacity": {
                      "value": 0.3
                  },
                  "rotate": {
                      "value": {
                          "min": 0,
                          "max": 360
                      },
                      "direction": "counter-clockwise",
                      "animation": {
                          "enable": true,
                          "speed": 15,
                          "sync": false
                      }
                  },
                  "size": {
                      "value": {
                          "min": 5,
                          "max": 10
                      }
                  },
                  "move": {
                      "speed": 5,
                      "outModes": "bounce"
                  }
              }
          }
      ]
  },
  "emitterAngled": {
      "name": "Emitter Angled",
      "particles": {
          "number": {
              "value": 0
          },
          "color": {
              "value": "random"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.3
          },
          "size": {
              "value": {
                  "min": 5,
                  "max": 10
              }
          },
          "move": {
              "angle": {
                  "offset": 0,
                  "value": 30
              },
              "enable": true,
              "speed": 15,
              "direction": "top",
              "outModes": {
                  "default": "destroy"
              }
          }
      },
      "background": {
          "color": "#fff"
      },
      "emitters": [
          {
              "direction": "top",
              "position": {
                  "x": {
                      "min": 25,
                      "max": 75
                  },
                  "y": 100
              },
              "life": {
                  "duration": 3,
                  "delay": 5,
                  "count": 0
              }
          }
      ]
  },
  "emitterImageShape": {
      "name": "Emitter Image Shape",
      "particles": {
          "number": {
              "value": 0
          },
          "color": {
              "value": [
                  "#f44336",
                  "#e91e63",
                  "#9c27b0",
                  "#673ab7",
                  "#3f51b5",
                  "#2196f3",
                  "#03a9f4",
                  "#00bcd4",
                  "#009688",
                  "#4CAF50",
                  "#8BC34A",
                  "#CDDC39",
                  "#FFEB3B",
                  "#FFC107",
                  "#FF9800",
                  "#FF5722"
              ]
          },
          "life": {
              "count": 1,
              "duration": {
                  "value": 1.5
              }
          },
          "move": {
              "enable": true,
              "speed": 0.5
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 10
              },
              "animation": {
                  "enable": true,
                  "speed": 30,
                  "sync": true,
                  "startValue": "min",
                  "count": 2
              }
          }
      },
      "background": {
          "color": "#fff"
      },
      "emitters": [
          {
              "shape": {
                  "replace": {
                      "color": true,
                      "opacity": true
                  },
                  "type": "canvas",
                  "options": {
                      "scale": 5,
                      "pixels": {
                          "filter": "pixelFilter",
                          "offset": 4
                      },
                      "image": {
                          "src": "https://particles.js.org/images/amongus_cyan.png"
                      }
                  }
              },
              "position": {
                  "x": 50,
                  "y": 50
              },
              "size": {
                  "width": 500,
                  "height": 500,
                  "mode": "precise"
              },
              "startCount": 300,
              "rate": {
                  "delay": 0.1,
                  "quantity": 100
              },
              "fill": true
          }
      ]
  },
  "emitterImages": {
      "name": "Emitter Images",
      "particles": {
          "move": {
              "enable": true,
              "outModes": "destroy",
              "speed": 2
          },
          "number": {
              "density": {
                  "enable": true
              },
              "value": 80
          },
          "opacity": {
              "value": 1
          },
          "rotate": {
              "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": false
              },
              "direction": "random",
              "value": {
                  "min": 0,
                  "max": 360
              }
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": 16
          }
      },
      "background": {
          "color": "#fff"
      },
      "emitters": {
          "particles": {
              "shape": {
                  "type": "image",
                  "options": {
                      "image": [
                          {
                              "src": "https://particles.js.org/images/fruits/apple.png",
                              "width": 32,
                              "height": 32
                          },
                          {
                              "src": "https://particles.js.org/images/fruits/avocado.png",
                              "width": 32,
                              "height": 32
                          },
                          {
                              "src": "https://particles.js.org/images/fruits/banana.png",
                              "width": 32,
                              "height": 32
                          },
                          {
                              "src": "https://particles.js.org/images/fruits/berries.png",
                              "width": 32,
                              "height": 32
                          },
                          {
                              "src": "https://particles.js.org/images/fruits/cherry.png",
                              "width": 32,
                              "height": 32
                          },
                          {
                              "src": "https://particles.js.org/images/fruits/grapes.png",
                              "width": 32,
                              "height": 32
                          },
                          {
                              "src": "https://particles.js.org/images/fruits/lemon.png",
                              "width": 32,
                              "height": 32
                          },
                          {
                              "src": "https://particles.js.org/images/fruits/orange.png",
                              "width": 32,
                              "height": 32
                          },
                          {
                              "src": "https://particles.js.org/images/fruits/peach.png",
                              "width": 32,
                              "height": 32
                          },
                          {
                              "src": "https://particles.js.org/images/fruits/pear.png",
                              "width": 32,
                              "height": 32
                          },
                          {
                              "src": "https://particles.js.org/images/fruits/pepper.png",
                              "width": 32,
                              "height": 32
                          },
                          {
                              "src": "https://particles.js.org/images/fruits/plum.png",
                              "width": 32,
                              "height": 32
                          },
                          {
                              "src": "https://particles.js.org/images/fruits/star.png",
                              "width": 32,
                              "height": 32
                          },
                          {
                              "src": "https://particles.js.org/images/fruits/strawberry.png",
                              "width": 32,
                              "height": 32
                          },
                          {
                              "src": "https://particles.js.org/images/fruits/watermelon.png",
                              "width": 32,
                              "height": 32
                          },
                          {
                              "src": "https://particles.js.org/images/fruits/watermelon_slice.png",
                              "width": 32,
                              "height": 32
                          }
                      ]
                  }
              }
          }
      }
  },
  "emitterPaths": {
      "name": "Emitter Paths",
      "particles": {
          "number": {
              "value": 0
          },
          "color": {
              "value": "#000000"
          },
          "move": {
              "enable": true,
              "trail": {
                  "enable": true,
                  "fill": {
                      "color": "#fff"
                  },
                  "length": 20
              },
              "outModes": "destroy"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": 3
          }
      },
      "background": {
          "color": "#fff"
      },
      "emitters": [
          {
              "position": {
                  "x": 33,
                  "y": 50
              },
              "rate": {
                  "value": 0.5
              },
              "particles": {
                  "life": {
                      "count": 1,
                      "duration": {
                          "value": 10
                      }
                  },
                  "move": {
                      "path": {
                          "clamp": false,
                          "enable": true,
                          "delay": {
                              "value": 0
                          },
                          "generator": "polygonPathGenerator",
                          "options": {
                              "sides": 6,
                              "turnSteps": 30,
                              "angle": 30
                          }
                      }
                  }
              }
          },
          {
              "position": {
                  "x": 67,
                  "y": 50
              },
              "rate": {
                  "value": 0.5
              },
              "particles": {
                  "move": {
                      "path": {
                          "clamp": false,
                          "enable": true,
                          "delay": {
                              "value": 0
                          },
                          "generator": "curvesPathGenerator"
                      }
                  }
              }
          }
      ]
  },
  "emitterShapes": {
      "name": "Emitter Shapes",
      "particles": {
          "number": {
              "value": 0
          },
          "color": {
              "value": "#000000"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": 1
          }
      },
      "background": {
          "color": "#fff"
      },
      "emitters": [
          {
              "shape": {
                  "type": "square",
                  "options": {}
              },
              "position": {
                  "x": 25,
                  "y": 25
              },
              "size": {
                  "width": 200,
                  "height": 200,
                  "mode": "precise"
              },
              "life": {
                  "duration": 10,
                  "delay": 0.5,
                  "count": 1
              },
              "rate": {
                  "delay": 0.1,
                  "quantity": 3
              },
              "fill": true
          },
          {
              "shape": {
                  "type": "circle",
                  "options": {}
              },
              "position": {
                  "x": 50,
                  "y": 25
              },
              "size": {
                  "width": 200,
                  "height": 200,
                  "mode": "precise"
              },
              "life": {
                  "duration": 10,
                  "delay": 0.5,
                  "count": 1
              },
              "rate": {
                  "delay": 0.1,
                  "quantity": 3
              },
              "fill": true
          },
          {
              "shape": {
                  "type": "polygon",
                  "options": {
                      "angle": -18,
                      "sides": 5
                  }
              },
              "position": {
                  "x": 75,
                  "y": 25
              },
              "size": {
                  "width": 200,
                  "height": 200,
                  "mode": "precise"
              },
              "life": {
                  "duration": 10,
                  "delay": 0.5,
                  "count": 1
              },
              "rate": {
                  "delay": 0.1,
                  "quantity": 3
              },
              "fill": true
          },
          {
              "shape": {
                  "type": "square",
                  "options": {}
              },
              "position": {
                  "x": 25,
                  "y": 50
              },
              "size": {
                  "width": 200,
                  "height": 200,
                  "mode": "precise"
              },
              "life": {
                  "duration": 10,
                  "delay": 0.5,
                  "count": 1
              },
              "rate": {
                  "delay": 0.1,
                  "quantity": 3
              },
              "fill": false
          },
          {
              "shape": {
                  "type": "circle",
                  "options": {}
              },
              "position": {
                  "x": 50,
                  "y": 50
              },
              "size": {
                  "width": 200,
                  "height": 200,
                  "mode": "precise"
              },
              "life": {
                  "duration": 10,
                  "delay": 0.5,
                  "count": 1
              },
              "rate": {
                  "delay": 0.1,
                  "quantity": 3
              },
              "fill": false
          },
          {
              "shape": {
                  "type": "polygon",
                  "options": {
                      "sides": 6
                  }
              },
              "position": {
                  "x": 75,
                  "y": 50
              },
              "size": {
                  "width": 200,
                  "height": 200,
                  "mode": "precise"
              },
              "life": {
                  "duration": 10,
                  "delay": 0.5,
                  "count": 1
              },
              "rate": {
                  "delay": 0.1,
                  "quantity": 3
              },
              "fill": false
          },
          {
              "shape": {
                  "type": "path",
                  "options": {
                      "points": [
                          {
                              "x": 0,
                              "y": 0
                          },
                          {
                              "x": 0,
                              "y": 50
                          },
                          {
                              "x": 25,
                              "y": 50
                          },
                          {
                              "x": 0,
                              "y": 100
                          },
                          {
                              "x": 50,
                              "y": 100
                          },
                          {
                              "x": 50,
                              "y": 75
                          },
                          {
                              "x": 100,
                              "y": 100
                          },
                          {
                              "x": 100,
                              "y": 50
                          },
                          {
                              "x": 75,
                              "y": 50
                          },
                          {
                              "x": 100,
                              "y": 0
                          },
                          {
                              "x": 50,
                              "y": 0
                          },
                          {
                              "x": 50,
                              "y": 25
                          }
                      ]
                  }
              },
              "position": {
                  "x": 25,
                  "y": 75
              },
              "size": {
                  "width": 200,
                  "height": 200,
                  "mode": "precise"
              },
              "life": {
                  "duration": 10,
                  "delay": 0.5,
                  "count": 1
              },
              "rate": {
                  "delay": 0.1,
                  "quantity": 3
              },
              "fill": true
          },
          {
              "shape": {
                  "type": "path",
                  "options": {
                      "points": [
                          {
                              "x": 0,
                              "y": 0
                          },
                          {
                              "x": 0,
                              "y": 50
                          },
                          {
                              "x": 25,
                              "y": 50
                          },
                          {
                              "x": 0,
                              "y": 100
                          },
                          {
                              "x": 50,
                              "y": 100
                          },
                          {
                              "x": 50,
                              "y": 75
                          },
                          {
                              "x": 100,
                              "y": 100
                          },
                          {
                              "x": 100,
                              "y": 50
                          },
                          {
                              "x": 75,
                              "y": 50
                          },
                          {
                              "x": 100,
                              "y": 0
                          },
                          {
                              "x": 50,
                              "y": 0
                          },
                          {
                              "x": 50,
                              "y": 25
                          }
                      ]
                  }
              },
              "position": {
                  "x": 50,
                  "y": 75
              },
              "size": {
                  "width": 200,
                  "height": 200,
                  "mode": "precise"
              },
              "life": {
                  "duration": 10,
                  "delay": 0.5,
                  "count": 1
              },
              "rate": {
                  "delay": 0.1,
                  "quantity": 3
              },
              "fill": false
          }
      ]
  },
  "emitterTextShape": {
      "name": "Emitter Text Shape",
      "particles": {
          "number": {
              "value": 0
          },
          "color": {
              "value": [
                  "#f44336",
                  "#e91e63",
                  "#9c27b0",
                  "#673ab7",
                  "#3f51b5",
                  "#2196f3",
                  "#03a9f4",
                  "#00bcd4",
                  "#009688",
                  "#4CAF50",
                  "#8BC34A",
                  "#CDDC39",
                  "#FFEB3B",
                  "#FFC107",
                  "#FF9800",
                  "#FF5722"
              ]
          },
          "life": {
              "count": 1,
              "duration": {
                  "value": 1.5
              }
          },
          "move": {
              "enable": true,
              "speed": 0.5
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 10
              },
              "animation": {
                  "enable": true,
                  "speed": 30,
                  "sync": true,
                  "startValue": "min",
                  "count": 2
              }
          }
      },
      "background": {
          "color": "#fff"
      },
      "emitters": [
          {
              "shape": {
                  "type": "canvas",
                  "options": {
                      "scale": 1,
                      "pixels": {
                          "filter": "pixelTextFilter",
                          "offset": 4
                      },
                      "text": {
                          "color": "#ff0000",
                          "font": {
                              "size": 500,
                              "family": "Verdana"
                          },
                          "text": "Particles",
                          "lines": {
                              "separator": "\n",
                              "spacing": 10
                          }
                      }
                  }
              },
              "position": {
                  "x": 50,
                  "y": 50
              },
              "size": {
                  "width": 500,
                  "height": 500,
                  "mode": "precise"
              },
              "startCount": 300,
              "rate": {
                  "delay": 0.1,
                  "quantity": 100
              },
              "fill": true
          }
      ]
  },
  "emitterTextStrokeShape": {
      "name": "Emitter Text Stroke Shape",
      "particles": {
          "number": {
              "value": 0
          },
          "color": {
              "value": [
                  "#f44336",
                  "#e91e63",
                  "#9c27b0",
                  "#673ab7",
                  "#3f51b5",
                  "#2196f3",
                  "#03a9f4",
                  "#00bcd4",
                  "#009688",
                  "#4CAF50",
                  "#8BC34A",
                  "#CDDC39",
                  "#FFEB3B",
                  "#FFC107",
                  "#FF9800",
                  "#FF5722"
              ]
          },
          "life": {
              "count": 1,
              "duration": {
                  "value": 1.5
              }
          },
          "move": {
              "enable": true,
              "speed": 0.5
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 10
              },
              "animation": {
                  "enable": true,
                  "speed": 30,
                  "sync": true,
                  "startValue": "min",
                  "count": 2
              }
          }
      },
      "background": {
          "color": "#fff"
      },
      "emitters": [
          {
              "shape": {
                  "type": "canvas",
                  "options": {
                      "scale": 1,
                      "pixels": {
                          "filter": "pixelTextFilter",
                          "offset": 4
                      },
                      "text": {
                          "color": "#ff0000",
                          "font": {
                              "size": 500,
                              "family": "Verdana"
                          },
                          "text": "Particles",
                          "lines": {
                              "separator": "\n",
                              "spacing": 10
                          }
                      }
                  }
              },
              "position": {
                  "x": 50,
                  "y": 50
              },
              "size": {
                  "width": 500,
                  "height": 500,
                  "mode": "precise"
              },
              "startCount": 300,
              "rate": {
                  "delay": 0.1,
                  "quantity": 100
              },
              "fill": false
          }
      ]
  },
  "fireworks": {
      "name": "Fireworks",
      "fullScreen": {
          "enable": true
      },
      "background": {
          "color": "#000"
      },
      "emitters": {
          "direction": "top",
          "life": {
              "count": 0,
              "duration": 0.1,
              "delay": 0.1
          },
          "rate": {
              "delay": 0.15,
              "quantity": 1
          },
          "size": {
              "width": 100,
              "height": 0
          },
          "position": {
              "y": 100,
              "x": 50
          }
      },
      "particles": {
          "number": {
              "value": 0
          },
          "destroy": {
              "bounds": {
                  "top": 30
              },
              "mode": "split",
              "split": {
                  "count": 1,
                  "factor": {
                      "value": 0.333333
                  },
                  "rate": {
                      "value": 100
                  },
                  "particles": {
                      "stroke": {
                          "width": 0
                      },
                      "color": {
                          "value": [
                              "#ff595e",
                              "#ffca3a",
                              "#8ac926",
                              "#1982c4",
                              "#6a4c93"
                          ]
                      },
                      "number": {
                          "value": 0
                      },
                      "collisions": {
                          "enable": false
                      },
                      "destroy": {
                          "bounds": {
                              "top": 0
                          }
                      },
                      "opacity": {
                          "value": {
                              "min": 0.1,
                              "max": 1
                          },
                          "animation": {
                              "enable": true,
                              "speed": 0.7,
                              "sync": false,
                              "startValue": "max",
                              "destroy": "min"
                          }
                      },
                      "shape": {
                          "type": "circle"
                      },
                      "size": {
                          "value": 2,
                          "animation": {
                              "enable": false
                          }
                      },
                      "life": {
                          "count": 1,
                          "duration": {
                              "value": {
                                  "min": 1,
                                  "max": 2
                              }
                          }
                      },
                      "move": {
                          "enable": true,
                          "gravity": {
                              "enable": true,
                              "acceleration": 9.81,
                              "inverse": false
                          },
                          "decay": 0.1,
                          "speed": {
                              "min": 10,
                              "max": 25
                          },
                          "direction": "outside",
                          "outModes": "destroy"
                      }
                  }
              }
          },
          "life": {
              "count": 1
          },
          "shape": {
              "type": "line"
          },
          "size": {
              "value": {
                  "min": 0.1,
                  "max": 50
              },
              "animation": {
                  "enable": true,
                  "sync": true,
                  "speed": 90,
                  "startValue": "max",
                  "destroy": "min"
              }
          },
          "stroke": {
              "color": {
                  "value": "#ffffff"
              },
              "width": 1
          },
          "rotate": {
              "path": true
          },
          "move": {
              "enable": true,
              "gravity": {
                  "acceleration": 15,
                  "enable": true,
                  "inverse": true,
                  "maxSpeed": 100
              },
              "speed": {
                  "min": 10,
                  "max": 20
              },
              "outModes": {
                  "default": "destroy",
                  "top": "none"
              },
              "trail": {
                  "fill": {
                      "color": "#000"
                  },
                  "enable": true,
                  "length": 10
              }
          }
      },
      "sounds": {
          "enable": true,
          "events": [
              {
                  "event": "particleDestroyed",
                  "filter": "explodeSoundCheck",
                  "audio": [
                      "https://particles.js.org/audio/explosion0.mp3",
                      "https://particles.js.org/audio/explosion1.mp3",
                      "https://particles.js.org/audio/explosion2.mp3"
                  ]
              }
          ],
          "volume": 50
      }
  },
  "fireworks2": {
      "name": "Fireworks 2",
      "fullScreen": {
          "enable": true
      },
      "background": {
          "color": "#ffffff",
          "image": "url('https://particles.js.org/images/background3.jpg')",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      },
      "backgroundMask": {
          "enable": true
      },
      "emitters": {
          "direction": "top",
          "life": {
              "count": 0,
              "duration": 0.1,
              "delay": 0.1
          },
          "rate": {
              "delay": 0.15,
              "quantity": 1
          },
          "size": {
              "width": 100,
              "height": 0
          },
          "position": {
              "y": 100,
              "x": 50
          }
      },
      "particles": {
          "color": {
              "value": "#fff"
          },
          "number": {
              "value": 0
          },
          "destroy": {
              "bounds": {
                  "top": 30
              },
              "mode": "split",
              "split": {
                  "count": 1,
                  "factor": {
                      "value": 0.333333
                  },
                  "rate": {
                      "value": 100
                  },
                  "particles": {
                      "stroke": {
                          "width": 0
                      },
                      "color": {
                          "value": [
                              "#ff595e",
                              "#ffca3a",
                              "#8ac926",
                              "#1982c4",
                              "#6a4c93"
                          ]
                      },
                      "number": {
                          "value": 0
                      },
                      "collisions": {
                          "enable": false
                      },
                      "destroy": {
                          "bounds": {
                              "top": 0
                          }
                      },
                      "opacity": {
                          "value": {
                              "min": 0.1,
                              "max": 1
                          },
                          "animation": {
                              "enable": true,
                              "speed": 0.7,
                              "sync": false,
                              "startValue": "max",
                              "destroy": "min"
                          }
                      },
                      "effect": {
                          "type": "trail",
                          "options": {
                              "trail": {
                                  "length": {
                                      "min": 5,
                                      "max": 10
                                  }
                              }
                          }
                      },
                      "shape": {
                          "type": "circle"
                      },
                      "size": {
                          "value": 2,
                          "animation": {
                              "enable": false
                          }
                      },
                      "life": {
                          "count": 1,
                          "duration": {
                              "value": {
                                  "min": 1,
                                  "max": 2
                              }
                          }
                      },
                      "move": {
                          "enable": true,
                          "gravity": {
                              "enable": true,
                              "acceleration": 9.81,
                              "inverse": false
                          },
                          "decay": 0.1,
                          "speed": {
                              "min": 10,
                              "max": 25
                          },
                          "direction": "outside",
                          "outModes": "destroy"
                      }
                  }
              }
          },
          "life": {
              "count": 1
          },
          "effect": {
              "type": "trail",
              "options": {
                  "trail": {
                      "length": {
                          "min": 10,
                          "max": 30
                      },
                      "minWidth": 1,
                      "maxWidth": 1
                  }
              }
          },
          "rotate": {
              "path": true
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": 1
          },
          "move": {
              "enable": true,
              "gravity": {
                  "acceleration": 15,
                  "enable": true,
                  "inverse": true,
                  "maxSpeed": 100
              },
              "speed": {
                  "min": 10,
                  "max": 20
              },
              "outModes": {
                  "default": "destroy",
                  "top": "none"
              }
          }
      },
      "sounds": {
          "enable": true,
          "events": [
              {
                  "event": "particleRemoved",
                  "filter": "explodeSoundCheck",
                  "audio": [
                      "https://particles.js.org/audio/explosion0.mp3",
                      "https://particles.js.org/audio/explosion1.mp3",
                      "https://particles.js.org/audio/explosion2.mp3"
                  ]
              }
          ],
          "volume": 50
      }
  },
  "fontawesome": {
      "name": "Font Awesome",
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "push"
              },
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              }
          },
          "modes": {
              "push": {
                  "quantity": 4
              },
              "repulse": {
                  "distance": 200,
                  "duration": 0.4
              }
          }
      },
      "particles": {
          "color": {
              "value": "#ffffff"
          },
          "links": {
              "blink": false,
              "color": "#ffffff",
              "consent": false,
              "distance": 150,
              "enable": true,
              "opacity": 0.4,
              "shadow": {
                  "blur": 5,
                  "color": "lime",
                  "enable": false
              },
              "width": 1
          },
          "move": {
              "direction": "none",
              "enable": true,
              "speed": 2
          },
          "number": {
              "density": {
                  "enable": true
              },
              "value": 80
          },
          "opacity": {
              "animation": {
                  "enable": true,
                  "speed": 1,
                  "sync": false
              },
              "value": {
                  "min": 0.1,
                  "max": 0.5
              }
          },
          "shape": {
              "options": {
                  "char": [
                      {
                          "fill": true,
                          "font": "Font Awesome 5 Brands",
                          "style": "",
                          "value": [
                              ""
                          ],
                          "weight": "400"
                      },
                      {
                          "fill": true,
                          "font": "Font Awesome 5 Free",
                          "style": "",
                          "value": [
                              ""
                          ],
                          "weight": "900"
                      }
                  ]
              },
              "type": "char"
          },
          "stroke": {
              "color": "#ffffff",
              "width": 1
          },
          "size": {
              "value": 16
          }
      },
      "pauseOnBlur": true,
      "background": {
          "color": "#0d47a1",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "forward": {
      "name": "Forward",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "rotate": {
              "path": true
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "stroke": {
              "width": 0,
              "color": "#000000"
          },
          "shape": {
              "type": "image",
              "options": {
                  "image": {
                      "src": "https://particles.js.org/images/arrow.png",
                      "width": 512,
                      "height": 512,
                      "replaceColor": true
                  }
              }
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 32
              }
          },
          "move": {
              "enable": true,
              "speed": 6
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#ffffff"
      }
  },
  "gifs": {
      "name": "Gifs",
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "push": {
                  "quantity": 4
              }
          }
      },
      "particles": {
          "color": {
              "value": "#ffffff"
          },
          "move": {
              "enable": true,
              "speed": {
                  "min": 1,
                  "max": 6
              }
          },
          "number": {
              "value": 20,
              "limit": {
                  "value": 30
              }
          },
          "opacity": {
              "value": 1
          },
          "rotate": {
              "path": true
          },
          "shape": {
              "options": {
                  "image": {
                      "gif": true,
                      "height": 200,
                      "src": "https://particles.js.org/images/mario.gif",
                      "width": 200
                  }
              },
              "type": "image"
          },
          "size": {
              "value": {
                  "min": 32,
                  "max": 64
              }
          }
      }
  },
  "grabRandomColor": {
      "name": "Grab Random Color",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "links": {
              "enable": true,
              "distance": 100,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 6
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "grab"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "color": "random",
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "gradients": {
      "name": "Gradients",
      "particles": {
          "number": {
              "value": 100
          },
          "gradient": [
              {
                  "type": "radial",
                  "colors": [
                      {
                          "stop": 0.25,
                          "value": "#5bc0eb"
                      },
                      {
                          "stop": 1,
                          "value": "#000000",
                          "opacity": 0
                      }
                  ]
              },
              {
                  "type": "radial",
                  "colors": [
                      {
                          "stop": 0.25,
                          "value": "#fde74c"
                      },
                      {
                          "stop": 1,
                          "value": "#000000",
                          "opacity": 0
                      }
                  ]
              },
              {
                  "type": "radial",
                  "colors": [
                      {
                          "stop": 0.25,
                          "value": "#9bc53d"
                      },
                      {
                          "stop": 1,
                          "value": "#000000",
                          "opacity": 0
                      }
                  ]
              },
              {
                  "type": "radial",
                  "colors": [
                      {
                          "stop": 0.25,
                          "value": "#e55934"
                      },
                      {
                          "stop": 1,
                          "value": "#000000",
                          "opacity": 0
                      }
                  ]
              },
              {
                  "type": "radial",
                  "colors": [
                      {
                          "stop": 0.25,
                          "value": "#fa7921"
                      },
                      {
                          "stop": 1,
                          "value": "#000000",
                          "opacity": 0
                      }
                  ]
              }
          ],
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 15,
                  "max": 20
              },
              "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": false
              }
          },
          "move": {
              "enable": true,
              "speed": 5
          }
      },
      "background": {
          "color": "#000"
      }
  },
  "gravity": {
      "name": "Gravity",
      "particles": {
          "destroy": {
              "mode": "split",
              "split": {
                  "count": 1,
                  "factor": {
                      "value": {
                          "min": 2,
                          "max": 4
                      }
                  }
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 5,
                  "max": 15
              }
          },
          "life": {
              "duration": {
                  "sync": true,
                  "value": 5
              },
              "count": 1
          },
          "move": {
              "enable": true,
              "gravity": {
                  "enable": true
              },
              "speed": {
                  "min": 5,
                  "max": 15
              },
              "outModes": {
                  "bottom": "split",
                  "default": "bounce",
                  "top": "none"
              },
              "trail": {
                  "enable": true,
                  "fill": {
                      "color": "#000000"
                  },
                  "length": 10
              }
          }
      },
      "background": {
          "color": "#000"
      },
      "emitters": {
          "direction": "top",
          "life": {
              "count": 0,
              "duration": 3,
              "delay": 2
          },
          "position": {
              "y": {
                  "min": 30,
                  "max": 70
              },
              "x": {
                  "min": 30,
                  "max": 70
              }
          },
          "rate": {
              "delay": 0.1,
              "quantity": 2
          },
          "size": {
              "width": 0,
              "height": 0
          },
          "particles": {
              "bounce": {
                  "vertical": {
                      "value": {
                          "min": 0.4,
                          "max": 0.6
                      }
                  }
              },
              "color": {
                  "value": [
                      "#5bc0eb",
                      "#fde74c",
                      "#9bc53d",
                      "#e55934",
                      "#fa7921",
                      "#2FF3E0",
                      "#F8D210",
                      "#FA26A0",
                      "#F51720"
                  ]
              },
              "size": {
                  "value": {
                      "min": 5,
                      "max": 10
                  }
              },
              "opacity": {
                  "value": 0.5
              },
              "move": {
                  "speed": {
                      "min": 5,
                      "max": 15
                  }
              }
          }
      }
  },
  "growing": {
      "name": "Growing",
      "emitters": {
          "direction": "top",
          "size": {
              "width": 100,
              "height": 0
          },
          "position": {
              "x": 50,
              "y": 100
          },
          "rate": {
              "delay": 0.1,
              "quantity": 2
          }
      },
      "particles": {
          "number": {
              "value": 0,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "random"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 20
              },
              "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": true,
                  "startValue": "min",
                  "destroy": "max"
              }
          },
          "links": {
              "enable": false,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 5,
              "outModes": "destroy"
          }
      },
      "background": {
          "color": "#000000",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "hexagonPath": {
      "name": "Hexagon Path",
      "particles": {
          "color": {
              "value": "#FF0000",
              "animation": {
                  "enable": true,
                  "speed": 10
              }
          },
          "move": {
              "direction": "none",
              "enable": true,
              "outModes": {
                  "default": "destroy"
              },
              "path": {
                  "clamp": false,
                  "enable": true,
                  "delay": {
                      "value": 0
                  },
                  "generator": "polygonPathGenerator",
                  "options": {
                      "sides": 6,
                      "turnSteps": 30,
                      "angle": 30
                  }
              },
              "speed": 3,
              "trail": {
                  "fill": {
                      "color": "#000"
                  },
                  "length": 20,
                  "enable": true
              }
          },
          "number": {
              "density": {
                  "enable": true
              },
              "value": 0
          },
          "opacity": {
              "value": 1
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": 2
          }
      },
      "background": {
          "color": "#000"
      },
      "emitters": {
          "direction": "none",
          "rate": {
              "quantity": 1,
              "delay": 0.25
          },
          "size": {
              "width": 0,
              "height": 0
          },
          "position": {
              "x": 50,
              "y": 50
          }
      }
  },
  "hollowknight": {
      "name": "Hollow Knight",
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "bubble"
              }
          },
          "modes": {
              "bubble": {
                  "distance": 40,
                  "duration": 2,
                  "opacity": 8,
                  "size": 6
              },
              "connect": {
                  "distance": 80,
                  "links": {
                      "opacity": 0.5
                  },
                  "radius": 60
              },
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              },
              "repulse": {
                  "distance": 200,
                  "duration": 0.4
              },
              "slow": {
                  "active": false,
                  "radius": 0,
                  "factor": 1
              }
          }
      },
      "particles": {
          "color": {
              "value": "#ffffff"
          },
          "links": {
              "blink": false,
              "color": "#ffffff",
              "consent": false,
              "distance": 25,
              "enable": true,
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "outModes": "bounce",
              "speed": 1
          },
          "number": {
              "density": {
                  "enable": false
              },
              "value": 400
          },
          "opacity": {
              "animation": {
                  "enable": true,
                  "speed": 2,
                  "sync": false
              },
              "value": {
                  "min": 0.05,
                  "max": 0.4
              }
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": 1
          }
      },
      "polygon": {
          "draw": {
              "enable": true,
              "stroke": {
                  "color": "#fff",
                  "width": 0.5,
                  "opacity": 0.2
              }
          },
          "enable": true,
          "move": {
              "radius": 10
          },
          "inline": {
              "arrangement": "equidistant"
          },
          "scale": 2,
          "type": "inline",
          "url": "https://particles.js.org/images/hollowknight.svg"
      },
      "background": {
          "color": "#000000",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "hyperspace": {
      "name": "Hyperspace",
      "background": {
          "color": "#000"
      },
      "particles": {
          "color": {
              "value": [
                  "#3998D0",
                  "#2EB6AF",
                  "#A9BD33",
                  "#FEC73B",
                  "#F89930",
                  "#F45623",
                  "#D62E32",
                  "#EB586E",
                  "#9952CF"
              ]
          },
          "move": {
              "enable": true,
              "outModes": {
                  "default": "destroy"
              },
              "speed": 3,
              "trail": {
                  "fill": {
                      "color": "#000"
                  },
                  "length": 30,
                  "enable": true
              }
          },
          "number": {
              "density": {
                  "enable": true
              },
              "value": 0
          },
          "opacity": {
              "value": 1
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 25
              },
              "animation": {
                  "startValue": "min",
                  "enable": true,
                  "speed": 2,
                  "destroy": "max",
                  "sync": true
              }
          }
      },
      "emitters": {
          "direction": "none",
          "rate": {
              "quantity": 5,
              "delay": 0.3
          },
          "size": {
              "width": 0,
              "height": 0
          },
          "position": {
              "x": 50,
              "y": 50
          }
      }
  },
  "imageMask": {
      "name": "Image Mask",
      "smooth": true,
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "bubble",
                  "parallax": {
                      "enable": false,
                      "force": 2,
                      "smooth": 10
                  }
              }
          },
          "modes": {
              "bubble": {
                  "distance": 40,
                  "duration": 2,
                  "opacity": 8,
                  "size": 15
              }
          }
      },
      "particles": {
          "move": {
              "direction": "none",
              "distance": 10,
              "enable": true,
              "speed": 1
          },
          "number": {
              "value": 600
          },
          "shape": {
              "type": [
                  "circle",
                  "square",
                  "triangle"
              ]
          },
          "size": {
              "value": {
                  "min": 3,
                  "max": 5
              }
          }
      },
      "canvasMask": {
          "enable": true,
          "scale": 5,
          "pixels": {
              "filter": "pixelFilter"
          },
          "image": {
              "src": "https://particles.js.org/images/amongus_cyan.png"
          }
      },
      "background": {
          "color": "#000000",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "images": {
      "name": "Images",
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "push"
              },
              "onHover": {
                  "enable": true,
                  "mode": "bubble"
              }
          },
          "modes": {
              "bubble": {
                  "distance": 400,
                  "duration": 2,
                  "opacity": 0.8,
                  "size": 40
              },
              "push": {
                  "quantity": 4
              }
          }
      },
      "particles": {
          "color": {
              "value": "#ffffff"
          },
          "move": {
              "enable": true,
              "speed": 2
          },
          "number": {
              "density": {
                  "enable": true
              },
              "value": 80
          },
          "opacity": {
              "value": 1
          },
          "rotate": {
              "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": false
              },
              "direction": "random",
              "value": {
                  "min": 0,
                  "max": 360
              }
          },
          "shape": {
              "options": {
                  "image": [
                      {
                          "name": "apple"
                      },
                      {
                          "name": "avocado"
                      },
                      {
                          "name": "banana"
                      },
                      {
                          "name": "berries"
                      },
                      {
                          "name": "cherry"
                      },
                      {
                          "name": "grapes"
                      },
                      {
                          "name": "lemon"
                      },
                      {
                          "name": "orange"
                      },
                      {
                          "name": "peach"
                      },
                      {
                          "name": "pear"
                      },
                      {
                          "name": "pepper"
                      },
                      {
                          "name": "plum"
                      },
                      {
                          "name": "star"
                      },
                      {
                          "name": "strawberry"
                      },
                      {
                          "name": "watermelon"
                      },
                      {
                          "name": "watermelon_slice"
                      }
                  ]
              },
              "type": "image"
          },
          "size": {
              "value": 16
          }
      },
      "background": {
          "color": "#fff"
      },
      "preload": [
          {
              "src": "https://particles.js.org/images/fruits/apple.png",
              "name": "apple",
              "width": 32,
              "height": 32
          },
          {
              "src": "https://particles.js.org/images/fruits/avocado.png",
              "name": "avocado",
              "width": 32,
              "height": 32
          },
          {
              "src": "https://particles.js.org/images/fruits/banana.png",
              "name": "banana",
              "width": 32,
              "height": 32
          },
          {
              "src": "https://particles.js.org/images/fruits/berries.png",
              "name": "berries",
              "width": 32,
              "height": 32
          },
          {
              "src": "https://particles.js.org/images/fruits/cherry.png",
              "name": "cherry",
              "width": 32,
              "height": 32
          },
          {
              "src": "https://particles.js.org/images/fruits/grapes.png",
              "name": "grapes",
              "width": 32,
              "height": 32
          },
          {
              "src": "https://particles.js.org/images/fruits/lemon.png",
              "name": "lemon",
              "width": 32,
              "height": 32
          },
          {
              "src": "https://particles.js.org/images/fruits/orange.png",
              "name": "orange",
              "width": 32,
              "height": 32
          },
          {
              "src": "https://particles.js.org/images/fruits/peach.png",
              "name": "peach",
              "width": 32,
              "height": 32
          },
          {
              "src": "https://particles.js.org/images/fruits/pear.png",
              "name": "pear",
              "width": 32,
              "height": 32
          },
          {
              "src": "https://particles.js.org/images/fruits/pepper.png",
              "name": "pepper",
              "width": 32,
              "height": 32
          },
          {
              "src": "https://particles.js.org/images/fruits/plum.png",
              "name": "plum",
              "width": 32,
              "height": 32
          },
          {
              "src": "https://particles.js.org/images/fruits/star.png",
              "name": "star",
              "width": 32,
              "height": 32
          },
          {
              "src": "https://particles.js.org/images/fruits/strawberry.png",
              "name": "strawberry",
              "width": 32,
              "height": 32
          },
          {
              "src": "https://particles.js.org/images/fruits/watermelon.png",
              "name": "watermelon",
              "width": 32,
              "height": 32
          },
          {
              "src": "https://particles.js.org/images/fruits/watermelon_slice.png",
              "name": "watermelon_slice",
              "width": 32,
              "height": 32
          }
      ]
  },
  "imagesDirections": {
      "name": "Images with Custom Directions",
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "push"
              },
              "onHover": {
                  "enable": true,
                  "mode": "bubble"
              }
          },
          "modes": {
              "bubble": {
                  "distance": 400,
                  "duration": 2,
                  "opacity": 0.8,
                  "size": 40
              },
              "push": {
                  "quantity": 4
              }
          }
      },
      "particles": {
          "move": {
              "direction": "none",
              "enable": true,
              "speed": 2
          },
          "number": {
              "density": {
                  "enable": true
              },
              "value": 80
          },
          "opacity": {
              "value": 1
          },
          "rotate": {
              "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": false
              },
              "direction": "random",
              "value": {
                  "min": 0,
                  "max": 360
              }
          },
          "shape": {
              "type": "image",
              "options": {
                  "image": [
                      {
                          "src": "https://particles.js.org/images/fruits/apple.png",
                          "width": 32,
                          "height": 32,
                          "particles": {
                              "move": {
                                  "direction": "top"
                              }
                          }
                      },
                      {
                          "src": "https://particles.js.org/images/fruits/avocado.png",
                          "width": 32,
                          "height": 32,
                          "particles": {
                              "move": {
                                  "direction": "bottom"
                              }
                          }
                      }
                  ]
              }
          },
          "size": {
              "value": 16
          }
      },
      "polygon": {
          "draw": {
              "enable": false,
              "stroke": {
                  "color": "#fff",
                  "width": 0.5,
                  "opacity": 0.2
              }
          },
          "move": {
              "radius": 10
          },
          "scale": 1,
          "type": "none",
          "url": ""
      },
      "background": {
          "color": "#fff",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "infection": {
      "name": "Infection",
      "infection": {
          "enable": true,
          "infections": 10,
          "cure": true,
          "stages": [
              {
                  "color": "#ff0000",
                  "duration": 1
              },
              {
                  "color": "#ffa500",
                  "duration": 1,
                  "rate": 2
              },
              {
                  "color": "#ffff00",
                  "duration": 1,
                  "rate": 2
              },
              {
                  "color": "#008000",
                  "duration": 1,
                  "rate": 3
              },
              {
                  "color": "#0000ff",
                  "duration": 1,
                  "rate": 4
              },
              {
                  "color": "#4b0082",
                  "duration": 1,
                  "rate": 5
              },
              {
                  "color": "#ee82ee",
                  "duration": 1,
                  "rate": 6,
                  "infectedStage": 0
              }
          ]
      },
      "particles": {
          "collisions": {
              "enable": true
          },
          "number": {
              "value": 400,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.8
          },
          "size": {
              "value": 5
          },
          "move": {
              "enable": true,
              "speed": 20,
              "outModes": "bounce"
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "life": {
      "name": "Life",
      "particles": {
          "number": {
              "value": 160,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "links": {
              "enable": true,
              "distance": 100,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 6
          },
          "life": {
              "duration": {
                  "sync": false,
                  "value": 3
              },
              "count": 0,
              "delay": {
                  "value": {
                      "min": 1,
                      "max": 2
                  }
              }
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "lightHover": {
      "name": "Light Hover",
      "particles": {
          "number": {
              "value": 30,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": [
                  "circle",
                  "square"
              ]
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 15,
                  "max": 30
              }
          },
          "rotate": {
              "value": 0,
              "direction": "clockwise",
              "animation": {
                  "speed": 5,
                  "enable": true
              }
          },
          "move": {
              "enable": true,
              "speed": 6,
              "direction": "none"
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "light"
              }
          },
          "modes": {
              "light": {
                  "area": {
                      "gradient": {
                          "start": "3b5e98",
                          "stop": "#17163e"
                      }
                  },
                  "shadow": {
                      "color": "#17163e"
                  }
              }
          }
      },
      "background": {
          "color": "#17163e"
      }
  },
  "linkTriangles": {
      "name": "Link Triangles",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "links": {
              "enable": true,
              "distance": 150,
              "color": "random",
              "opacity": 0.4,
              "width": 1,
              "triangles": {
                  "enable": true,
                  "color": "#ffffff",
                  "opacity": 0.1
              }
          },
          "move": {
              "enable": true,
              "speed": 6
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "localPolygonMask": {
      "name": "Local Polygon Mask",
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "bubble"
              }
          },
          "modes": {
              "bubble": {
                  "distance": 40,
                  "duration": 2,
                  "opacity": 8,
                  "size": 6
              }
          }
      },
      "particles": {
          "color": {
              "value": "#ffffff"
          },
          "links": {
              "blink": false,
              "color": "#ffffff",
              "consent": false,
              "distance": 30,
              "enable": false,
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "outModes": "bounce",
              "speed": 1
          },
          "number": {
              "density": {
                  "enable": false
              },
              "value": 200
          },
          "opacity": {
              "value": 0.5
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": 3
          }
      },
      "polygon": {
          "draw": {
              "enable": true,
              "stroke": {
                  "color": "#fff",
                  "width": 0.5,
                  "opacity": 0.2
              }
          },
          "enable": true,
          "move": {
              "radius": 10
          },
          "position": {
              "x": 50,
              "y": 50
          },
          "inline": {
              "arrangement": "equidistant"
          },
          "scale": 3,
          "type": "inside",
          "data": "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"200\" width=\"150\"><path d=\"M 75,0 0,200 h 150 z\" /></svg>"
      },
      "background": {
          "color": "#000000",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "manual": {
      "name": "Manual Particles",
      "manualParticles": [
          {
              "position": {
                  "x": 50,
                  "y": 50
              }
          },
          {
              "position": {
                  "x": 25,
                  "y": 25
              }
          },
          {
              "position": {
                  "x": 75,
                  "y": 75
              }
          },
          {
              "position": {
                  "x": 25,
                  "y": 75
              }
          },
          {
              "position": {
                  "x": 75,
                  "y": 25
              }
          }
      ],
      "particles": {
          "number": {
              "value": 0,
              "density": {
                  "enable": false
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": 30
          },
          "links": {
              "enable": true,
              "distance": 100,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 2,
              "direction": "top",
              "straight": true,
              "warp": true
          }
      },
      "background": {
          "color": "#000000",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "motionDisable": {
      "name": "Motion Disable",
      "motion": {
          "disable": true
      },
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "links": {
              "enable": true,
              "distance": 100,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 6,
              "direction": "none"
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "motionReduce": {
      "name": "Motion Reduce",
      "motion": {
          "disable": false,
          "reduce": {
              "value": true,
              "factor": 6
          }
      },
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "links": {
              "enable": true,
              "distance": 100,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 6
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "mouseAttract": {
      "name": "Mouse Attract",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "links": {
              "enable": true,
              "distance": 100,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 6
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "attract"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "attract": {
                  "distance": 600,
                  "duration": 0.4,
                  "speed": 3
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "mouseBounce": {
      "name": "Mouse Bounce",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "links": {
              "enable": true,
              "distance": 100,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 6
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "bounce"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "bounce": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "mouseFollow": {
      "name": "Mouse Follow",
      "background": {
          "color": "#000000"
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": [
                      "bubble",
                      "connect"
                  ]
              }
          },
          "modes": {
              "bubble": {
                  "distance": 200,
                  "duration": 2,
                  "opacity": 1,
                  "size": 30,
                  "color": {
                      "value": [
                          "#5bc0eb",
                          "#fde74c",
                          "#9bc53d",
                          "#e55934",
                          "#fa7921"
                      ]
                  }
              },
              "connect": {
                  "distance": 60,
                  "links": {
                      "opacity": 0.2
                  },
                  "radius": 200
              }
          }
      },
      "particles": {
          "color": {
              "value": "#000000"
          },
          "move": {
              "direction": "none",
              "enable": true,
              "speed": 2
          },
          "number": {
              "density": {
                  "enable": true
              },
              "value": 300
          },
          "opacity": {
              "value": 0
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": {
                  "min": 10,
                  "max": 15
              }
          }
      },
      "detectRetina": true
  },
  "mouseTrail": {
      "name": "Mouse Trail",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "links": {
              "enable": true,
              "distance": 100,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 6
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "trail"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              },
              "trail": {
                  "delay": 0.01,
                  "pauseOnStop": true,
                  "particles": {
                      "color": {
                          "value": "#00ff00",
                          "animation": {
                              "enable": true,
                              "speed": 200,
                              "sync": false
                          }
                      },
                      "links": {
                          "enable": false
                      },
                      "move": {
                          "outModes": "destroy"
                      },
                      "opacity": {
                          "value": {
                              "min": 0.1,
                              "max": 1
                          },
                          "animation": {
                              "enable": true,
                              "speed": 3,
                              "sync": true
                          }
                      },
                      "size": {
                          "value": {
                              "min": 1,
                              "max": 10
                          }
                      }
                  }
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "mouseTrailNoise": {
      "name": "Mouse Trail Noise",
      "particles": {
          "number": {
              "value": 0
          },
          "color": {
              "value": [
                  "#ff0000",
                  "#00ff00",
                  "#0000ff"
              ],
              "animation": {
                  "enable": true,
                  "speed": 360,
                  "sync": false
              }
          },
          "shape": {
              "type": "triangle"
          },
          "opacity": {
              "value": {
                  "min": 0,
                  "max": 1
              },
              "animation": {
                  "enable": true,
                  "speed": 1,
                  "sync": false,
                  "destroy": "min"
              }
          },
          "size": {
              "value": {
                  "min": 4,
                  "max": 8
              }
          },
          "move": {
              "enable": true,
              "speed": 6,
              "outModes": "destroy",
              "path": {
                  "enable": true,
                  "options": {
                      "size": 64,
                      "draw": false,
                      "increment": 0.005
                  },
                  "delay": {
                      "value": 0
                  },
                  "generator": "perlinNoise"
              }
          },
          "rotate": {
              "value": {
                  "min": 0,
                  "max": 360
              },
              "direction": "random",
              "move": true,
              "animation": {
                  "enable": true,
                  "speed": 60
              }
          },
          "tilt": {
              "direction": "random",
              "enable": true,
              "move": true,
              "value": {
                  "min": 0,
                  "max": 360
              },
              "animation": {
                  "enable": true,
                  "speed": 60
              }
          },
          "roll": {
              "darken": {
                  "enable": true,
                  "value": 30
              },
              "enlighten": {
                  "enable": true,
                  "value": 30
              },
              "enable": true,
              "mode": "both",
              "speed": {
                  "min": 15,
                  "max": 25
              }
          },
          "wobble": {
              "distance": 30,
              "enable": true,
              "move": true,
              "speed": {
                  "min": -15,
                  "max": 15
              }
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "trail"
              }
          },
          "modes": {
              "trail": {
                  "delay": 0.01
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "moveAngle": {
      "name": "Move Angle",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "links": {
              "enable": true,
              "distance": 100,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 6,
              "direction": -30
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "moveDistance": {
      "name": "Move Distance",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "links": {
              "enable": true,
              "distance": 100,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 6,
              "distance": 50,
              "outModes": "none"
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "moveInside": {
      "name": "Move Inside",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 5,
                  "max": 7
              }
          },
          "move": {
              "enable": true,
              "speed": 10,
              "direction": "inside",
              "straight": true
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "moveOutside": {
      "name": "Move Outside",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 5,
                  "max": 7
              }
          },
          "move": {
              "enable": true,
              "speed": 10,
              "direction": "outside",
              "straight": true
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "multipleClickEmitters": {
      "name": "Multiple Click Emitters",
      "background": {
          "color": "#f00"
      },
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "emitter"
              }
          },
          "modes": {
              "emitters": {
                  "random": {
                      "enable": false,
                      "count": 0
                  },
                  "value": [
                      {
                          "name": "big-particle",
                          "startCount": 1,
                          "life": {
                              "count": 1,
                              "delay": 0,
                              "duration": 0.1
                          },
                          "rate": {
                              "delay": 0,
                              "quantity": 0
                          },
                          "particles": {
                              "color": {
                                  "value": "#0f0"
                              },
                              "size": {
                                  "value": {
                                      "min": 150,
                                      "max": 300
                                  },
                                  "animation": {
                                      "enable": true,
                                      "speed": 1500,
                                      "decay": 0.02,
                                      "startValue": "min",
                                      "count": 1,
                                      "sync": true
                                  }
                              },
                              "life": {
                                  "duration": {
                                      "value": 1,
                                      "sync": true
                                  },
                                  "count": 1
                              }
                          }
                      },
                      {
                          "name": "small-particles",
                          "startCount": 50,
                          "life": {
                              "count": 1,
                              "delay": 0,
                              "duration": 0.1
                          },
                          "particles": {
                              "color": {
                                  "value": "#f00"
                              },
                              "move": {
                                  "decay": 0.1,
                                  "enable": true,
                                  "speed": 60,
                                  "outModes": "destroy"
                              },
                              "life": {
                                  "duration": {
                                      "value": 1,
                                      "sync": true
                                  },
                                  "count": 1
                              },
                              "size": {
                                  "value": {
                                      "min": 1,
                                      "max": 10
                                  }
                              }
                          }
                      }
                  ]
              }
          }
      },
      "particles": {
          "number": {
              "value": 0
          }
      },
      "emitters": []
  },
  "multiplePolygonMasks": {
      "name": "Multiple Polygon Masks",
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": false,
                  "mode": "push"
              },
              "onHover": {
                  "enable": true,
                  "mode": "bubble",
                  "parallax": {
                      "enable": false,
                      "force": 2,
                      "smooth": 10
                  }
              }
          },
          "modes": {
              "bubble": {
                  "distance": 40,
                  "duration": 2,
                  "opacity": 8,
                  "size": 6
              },
              "connect": {
                  "distance": 80,
                  "links": {
                      "opacity": 0.5
                  },
                  "radius": 60
              },
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              },
              "repulse": {
                  "distance": 200,
                  "duration": 0.4
              },
              "slow": {
                  "active": false,
                  "radius": 0,
                  "factor": 1
              }
          }
      },
      "particles": {
          "color": {
              "value": [
                  "#4285f4",
                  "#34A853",
                  "#FBBC05",
                  "#EA4335"
              ]
          },
          "links": {
              "blink": false,
              "color": "random",
              "consent": false,
              "distance": 40,
              "enable": true,
              "opacity": 1,
              "width": 1
          },
          "move": {
              "enable": true,
              "outModes": "bounce",
              "speed": 1
          },
          "number": {
              "value": 200
          },
          "opacity": {
              "animation": {
                  "enable": true,
                  "speed": 2,
                  "sync": false
              },
              "value": {
                  "min": 0.05,
                  "max": 0.4
              }
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": 1
          }
      },
      "polygon": {
          "draw": {
              "enable": true,
              "stroke": {
                  "color": "#fff",
                  "width": 0.5,
                  "opacity": 0.2
              }
          },
          "enable": true,
          "move": {
              "radius": 10
          },
          "position": {
              "x": 30,
              "y": 30
          },
          "inline": {
              "arrangement": "equidistant"
          },
          "scale": 1,
          "type": "inline",
          "url": "https://particles.js.org/images/google.svg"
      },
      "background": {
          "color": "#000000",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "nasa": {
      "name": "NASA",
      "particles": {
          "number": {
              "value": 160,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": {
                  "min": 0.1,
                  "max": 1
              },
              "animation": {
                  "enable": true,
                  "speed": 1,
                  "sync": false
              }
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "move": {
              "enable": true,
              "speed": {
                  "min": 0.1,
                  "max": 1
              }
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "bubble"
              },
              "onClick": {
                  "enable": true,
                  "mode": "repulse"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 250,
                  "size": 0,
                  "duration": 2,
                  "opacity": 0
              },
              "repulse": {
                  "distance": 400,
                  "duration": 0.4
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#232741",
          "image": "url('http://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1237px-NASA_logo.svg.png')",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "20%"
      }
  },
  "noClear": {
      "name": "No Clear",
      "clear": false,
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "trail"
              }
          },
          "modes": {
              "trail": {
                  "delay": 0.01,
                  "quantity": 1,
                  "pauseOnStop": true
              }
          }
      },
      "particles": {
          "color": {
              "value": [
                  "#80F31F",
                  "#ED8B08",
                  "#ED1868",
                  "#800CE0",
                  "#1274F7",
                  "#12E797",
                  "#7FF31F",
                  "#ED8B08",
                  "#ED1868",
                  "#800CE0",
                  "#1274F7",
                  "#12E797",
                  "#7FF31F",
                  "#ED8B08",
                  "#ED1868",
                  "#800CE0",
                  "#1274F7",
                  "#12E797",
                  "#7FF31F",
                  "#ED8B08",
                  "#ED1868",
                  "#800CE0",
                  "#1274F7",
                  "#12E797",
                  "#7FF31F",
                  "#ED8B08",
                  "#ED1868",
                  "#800CE0",
                  "#1274F7",
                  "#12E797",
                  "#7FF31F",
                  "#ED8B08",
                  "#ED1868",
                  "#800CE0",
                  "#1274F7",
                  "#12E797",
                  "#7FF31F",
                  "#ED8B08",
                  "#ED1868",
                  "#800CE0",
                  "#1274F7",
                  "#12E797",
                  "#7FF31F",
                  "#ED8B08",
                  "#ED1868",
                  "#800CE0",
                  "#1274F7",
                  "#12E797",
                  "#7FF31F",
                  "#ED8B08"
              ]
          },
          "life": {
              "count": 1,
              "duration": {
                  "sync": true,
                  "value": 1
              }
          },
          "number": {
              "value": 500
          },
          "size": {
              "value": 50
          },
          "shape": {
              "type": "star"
          },
          "rotate": {
              "value": {
                  "min": 0,
                  "max": 360
              }
          }
      }
  },
  "noConfig": {
      "name": "No Config"
  },
  "noisePlanes": {
      "name": "Noise Planes",
      "background": {
          "color": "#000"
      },
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "bubble": {
                  "distance": 400,
                  "duration": 2,
                  "opacity": 0.8,
                  "size": 40,
                  "speed": 3
              },
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              },
              "repulse": {
                  "distance": 200,
                  "duration": 0.4
              }
          }
      },
      "particles": {
          "move": {
              "path": {
                  "enable": true,
                  "options": {
                      "size": 32,
                      "draw": false,
                      "increment": 0.004
                  },
                  "generator": "simplexNoise"
              },
              "enable": true,
              "speed": 6
          },
          "number": {
              "density": {
                  "enable": true
              },
              "value": 80
          },
          "rotate": {
              "value": 45,
              "path": true
          },
          "opacity": {
              "value": 1
          },
          "shape": {
              "options": {
                  "image": {
                      "height": 128,
                      "src": "https://particles.js.org/images/plane_alt.png",
                      "width": 128
                  }
              },
              "type": "image"
          },
          "size": {
              "value": 32
          },
          "zIndex": {
              "value": {
                  "min": 0,
                  "max": 100
              },
              "opacityRate": 0,
              "sizeRate": 2,
              "velocityRate": 2
          }
      }
  },
  "nyancat": {
      "name": "Nyan Cat",
      "particles": {
          "number": {
              "value": 1,
              "density": {
                  "enable": false
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "image",
              "options": {
                  "image": {
                      "src": "https://cdn2.scratch.mit.edu/get_image/gallery/780516_170x100.png",
                      "width": 1750,
                      "height": 800
                  }
              }
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": 240
          },
          "move": {
              "enable": true,
              "speed": 6,
              "direction": "right",
              "straight": true
          }
      },
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "repulse"
              }
          },
          "modes": {
              "repulse": {
                  "distance": 200,
                  "duration": 0.4
              }
          }
      },
      "background": {
          "color": "#0d47a1",
          "image": "url('http://fc06.deviantart.net/fs71/f/2011/187/1/0/nyan_cat_background_by_kento1-d3l6i50.jpg')",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "nyancat2": {
      "name": "Nyan Cat 2",
      "particles": {
          "number": {
              "value": 100,
              "density": {
                  "enable": false
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "star",
              "options": {
                  "star": {
                      "sides": 5
                  }
              }
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 4
              }
          },
          "move": {
              "enable": true,
              "speed": 6,
              "direction": "left",
              "straight": true
          }
      },
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "repulse"
              }
          },
          "modes": {
              "repulse": {
                  "distance": 200,
                  "duration": 0.4
              }
          }
      },
      "background": {
          "color": "#043564",
          "image": "url('https://vincentgarreau.com/particles.js/assets/img/kbLd9vb_new.gif')",
          "position": "0 50%",
          "repeat": "no-repeat",
          "size": "60%"
      }
  },
  "orbit": {
      "name": "Orbit",
      "particles": {
          "color": {
              "value": [
                  "#5bc0eb",
                  "#fde74c",
                  "#9bc53d",
                  "#e55934",
                  "#fa7921"
              ]
          },
          "move": {
              "enable": true,
              "speed": 3
          },
          "number": {
              "density": {
                  "enable": true
              },
              "limit": {
                  "value": 300
              },
              "value": 100
          },
          "opacity": {
              "value": 1
          },
          "orbit": {
              "animation": {
                  "enable": true,
                  "speed": 1
              },
              "enable": true,
              "opacity": 1,
              "color": "#ff7700",
              "rotation": {
                  "random": {
                      "enable": true
                  }
              }
          },
          "shape": {
              "type": [
                  "circle",
                  "square"
              ]
          },
          "size": {
              "value": 10
          }
      },
      "background": {
          "color": "#000000",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "parallax": {
      "name": "Parallax",
      "particles": {
          "number": {
              "value": 100,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": {
                  "min": 0.1,
                  "max": 0.5
              },
              "animation": {
                  "enable": true,
                  "speed": 3,
                  "sync": false
              }
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 10
              },
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": false
              }
          },
          "links": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 2
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "grab",
                  "parallax": {
                      "enable": true,
                      "smooth": 10,
                      "force": 60
                  }
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#0d47a1"
      }
  },
  "pathPolygonMask": {
      "name": "Path Polygon Mask",
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "bubble"
              }
          },
          "modes": {
              "bubble": {
                  "distance": 40,
                  "duration": 2,
                  "opacity": 8,
                  "size": 6
              }
          }
      },
      "particles": {
          "color": {
              "value": "#ffffff"
          },
          "links": {
              "color": "#ffffff",
              "distance": 30,
              "enable": true,
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "outModes": "bounce",
              "speed": 1
          },
          "number": {
              "value": 80
          },
          "opacity": {
              "animation": {
                  "enable": true,
                  "speed": 2,
                  "sync": false
              },
              "value": {
                  "min": 0.05,
                  "max": 0.4
              }
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": 1
          }
      },
      "polygon": {
          "draw": {
              "enable": true,
              "stroke": {
                  "color": "#fff",
                  "width": 0.5,
                  "opacity": 0.2
              }
          },
          "enable": true,
          "move": {
              "radius": 10
          },
          "position": {
              "x": 50,
              "y": 50
          },
          "inline": {
              "arrangement": "equidistant"
          },
          "scale": 2,
          "type": "inline",
          "data": {
              "path": "M 75,0 0,200 h 150 z",
              "size": {
                  "width": 150,
                  "height": 200
              }
          }
      },
      "background": {
          "color": "#000000",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "pathSvg": {
      "name": "Path SVG",
      "particles": {
          "color": {
              "value": [
                  "#ffffff",
                  "#ff0000",
                  "#00ff00",
                  "#0000ff"
              ]
          },
          "move": {
              "enable": true,
              "outModes": "bounce",
              "speed": {
                  "min": 1,
                  "max": 3
              },
              "path": {
                  "enable": true,
                  "options": {
                      "path": {
                          "data": [
                              "M 75,0 0,200 h 150 z"
                          ],
                          "size": {
                              "width": 150,
                              "height": 200
                          }
                      },
                      "scale": 1,
                      "width": 10
                  },
                  "generator": "svgPathGenerator"
              },
              "trail": {
                  "enable": true,
                  "length": 10,
                  "fill": {
                      "color": "#000000"
                  }
              }
          },
          "number": {
              "value": 80
          },
          "opacity": {
              "value": 1
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": 3
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "planes": {
      "name": "Planes",
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "push": {
                  "quantity": 4
              }
          }
      },
      "particles": {
          "color": {
              "value": "#ffffff"
          },
          "move": {
              "enable": true,
              "speed": 6
          },
          "number": {
              "density": {
                  "enable": true
              },
              "value": 80
          },
          "rotate": {
              "value": 45,
              "path": true
          },
          "opacity": {
              "value": 1
          },
          "shape": {
              "options": {
                  "image": {
                      "height": 128,
                      "src": "https://particles.js.org/images/plane_alt.png",
                      "width": 128
                  }
              },
              "type": "image"
          },
          "size": {
              "value": {
                  "min": 16,
                  "max": 32
              }
          }
      },
      "detectRetina": true
  },
  "plasma": {
      "name": "Plasma",
      "background": {
          "color": {
              "value": "#000000"
          }
      },
      "particles": {
          "number": {
              "value": 150,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": 0
          },
          "links": {
              "enable": true,
              "distance": 110,
              "color": "#19f",
              "opacity": 0.4,
              "width": 2
          },
          "move": {
              "enable": true,
              "speed": 50,
              "outModes": "bounce"
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              }
          },
          "modes": {
              "repulse": {
                  "distance": 150,
                  "duration": 0.4
              }
          }
      },
      "detectRetina": true
  },
  "polygonMask": {
      "name": "Polygon Mask",
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": false,
                  "mode": "push"
              },
              "onHover": {
                  "enable": false,
                  "mode": "bubble",
                  "parallax": {
                      "enable": false,
                      "force": 2,
                      "smooth": 10
                  }
              }
          },
          "modes": {
              "bubble": {
                  "distance": 40,
                  "duration": 2,
                  "opacity": 8,
                  "size": 6
              },
              "connect": {
                  "distance": 80,
                  "links": {
                      "opacity": 0.5
                  },
                  "radius": 60
              },
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              },
              "repulse": {
                  "distance": 200,
                  "duration": 0.4
              },
              "slow": {
                  "active": false,
                  "radius": 0,
                  "factor": 1
              }
          }
      },
      "particles": {
          "color": {
              "value": "#ffffff"
          },
          "links": {
              "blink": false,
              "color": "#ffffff",
              "consent": false,
              "distance": 30,
              "enable": true,
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "outModes": "bounce",
              "speed": 1
          },
          "number": {
              "value": 200
          },
          "opacity": {
              "animation": {
                  "enable": true,
                  "speed": 2,
                  "sync": false
              },
              "value": {
                  "min": 0.05,
                  "max": 0.4
              }
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": 1
          }
      },
      "polygon": {
          "draw": {
              "enable": true,
              "stroke": {
                  "color": "#fff",
                  "width": 1,
                  "opacity": 0.2
              }
          },
          "enable": true,
          "move": {
              "radius": 10
          },
          "position": {
              "x": 50,
              "y": 50
          },
          "inline": {
              "arrangement": "equidistant"
          },
          "scale": 0.5,
          "type": "inline",
          "url": "https://particles.js.org/images/smalldeer.svg"
      },
      "background": {
          "color": "#000000",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "polygons": {
      "name": "Polygon Shape",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "polygon",
              "options": {
                  "polygon": [
                      {
                          "sides": 3,
                          "particles": {
                              "opacity": {
                                  "value": {
                                      "min": 0.5,
                                      "max": 0.8
                                  }
                              },
                              "size": {
                                  "value": {
                                      "min": 10,
                                      "max": 12
                                  }
                              },
                              "color": {
                                  "value": "ff0"
                              }
                          }
                      },
                      {
                          "sides": 5,
                          "particles": {
                              "opacity": {
                                  "value": 0.5
                              },
                              "size": {
                                  "value": 8
                              },
                              "color": {
                                  "value": "0f0"
                              }
                          }
                      },
                      {
                          "sides": 8,
                          "particles": {
                              "opacity": {
                                  "value": 1
                              },
                              "size": {
                                  "value": {
                                      "min": 15,
                                      "max": 20
                                  }
                              },
                              "color": {
                                  "value": "f00"
                              }
                          }
                      }
                  ]
              }
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 5
              }
          },
          "links": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 2
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "bubble",
                  "parallax": {
                      "enable": false,
                      "force": 60,
                      "smooth": 10
                  }
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#0d47a1"
      }
  },
  "pop": {
      "name": "Pop",
      "particles": {
          "number": {
              "limit": {
                  "value": 80,
                  "mode": "wait"
              },
              "value": 80
          },
          "color": {
              "value": [
                  "#3998D0",
                  "#2EB6AF",
                  "#A9BD33",
                  "#FEC73B",
                  "#F89930",
                  "#F45623",
                  "#D62E32",
                  "#EB586E",
                  "#9952CF"
              ]
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 10,
                  "max": 15
              }
          },
          "collisions": {
              "enable": true,
              "mode": "bounce"
          },
          "move": {
              "enable": true,
              "speed": 3
          }
      },
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "pop"
              }
          }
      },
      "background": {
          "color": "#000000"
      },
      "emitters": {
          "direction": "none",
          "life": {
              "count": 0,
              "duration": 0.1,
              "delay": 0.1
          },
          "rate": {
              "delay": 0.1,
              "quantity": 1
          },
          "size": {
              "width": 100,
              "height": 100
          },
          "position": {
              "x": 50,
              "y": 50
          }
      }
  },
  "random": {
      "name": "Random Colors",
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "push"
              },
              "onHover": {
                  "enable": true,
                  "mode": "connect",
                  "parallax": {
                      "enable": false,
                      "force": 60,
                      "smooth": 10
                  }
              }
          },
          "modes": {
              "bubble": {
                  "distance": 400,
                  "duration": 2,
                  "opacity": 0.8,
                  "size": 40
              },
              "connect": {
                  "distance": 80,
                  "links": {
                      "opacity": 0.5
                  },
                  "radius": 60
              },
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              },
              "repulse": {
                  "distance": 200,
                  "duration": 0.4
              }
          }
      },
      "particles": {
          "color": {
              "value": "random"
          },
          "links": {
              "blink": false,
              "color": "#ffffff",
              "consent": false,
              "distance": 150,
              "enable": false,
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 6
          },
          "number": {
              "density": {
                  "enable": true
              },
              "limit": {
                  "value": 500
              },
              "value": 300
          },
          "opacity": {
              "value": 0.5
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": {
                  "min": 10,
                  "max": 15
              }
          }
      },
      "background": {
          "color": "#000000",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "reactBubbles": {
      "name": "React Bubbles",
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onHover": {
                  "enable": true,
                  "mode": "bubble"
              }
          },
          "modes": {
              "bubble": {
                  "distance": 250,
                  "duration": 2,
                  "opacity": 0,
                  "size": 0
              },
              "connect": {
                  "distance": 80,
                  "links": {
                      "opacity": 0.5
                  },
                  "radius": 60
              },
              "grab": {
                  "distance": 180,
                  "links": {
                      "opacity": 0.35
                  }
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              },
              "repulse": {
                  "distance": 200,
                  "duration": 4
              },
              "slow": {
                  "factor": 1,
                  "radius": 0
              }
          }
      },
      "particles": {
          "color": {
              "value": "#FFF"
          },
          "collisions": {
              "enable": true
          },
          "move": {
              "attract": {
                  "enable": false,
                  "rotate": {
                      "x": 3000,
                      "y": 3000
                  }
              },
              "direction": "top",
              "enable": true,
              "speed": {
                  "min": 0.1,
                  "max": 1
              }
          },
          "number": {
              "value": 160
          },
          "opacity": {
              "animation": {
                  "enable": true,
                  "speed": 1,
                  "sync": false
              },
              "value": {
                  "min": 0.1,
                  "max": 0.5
              }
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          }
      },
      "pauseOnBlur": true,
      "background": {
          "color": "#0d47a1",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "reactDefaults": {
      "name": "React Defaults",
      "particles": {
          "number": {
              "value": 40
          },
          "color": {
              "value": "#FFF"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": {
                  "min": 0.1,
                  "max": 0.5
              },
              "animation": {
                  "enable": true,
                  "speed": 1,
                  "sync": false
              }
          },
          "size": {
              "value": 1
          },
          "links": {
              "enable": true,
              "distance": 150,
              "color": "#FFF",
              "opacity": 0.6,
              "width": 1,
              "shadow": {
                  "enable": false,
                  "blur": 5,
                  "color": "lime"
              }
          },
          "move": {
              "enable": true,
              "speed": 3,
              "outModes": "bounce"
          },
          "collisions": {
              "enable": true
          }
      },
      "background": {
          "color": "#0d47a1"
      }
  },
  "reactMultipleImages": {
      "name": "React Multiple Images",
      "particles": {
          "color": {
              "value": "#CCC"
          },
          "collisions": {
              "enable": true
          },
          "links": {
              "blink": false,
              "color": "#fff",
              "consent": false,
              "distance": 150,
              "enable": false,
              "opacity": 0.6,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 1
          },
          "number": {
              "density": {
                  "enable": true
              },
              "value": 8
          },
          "opacity": {
              "animation": {
                  "enable": true,
                  "speed": 1,
                  "sync": false
              },
              "value": {
                  "min": 0.1,
                  "max": 0.5
              }
          },
          "shape": {
              "options": {
                  "image": [
                      {
                          "height": 20,
                          "replaceColor": true,
                          "src": "https://particles.js.org/images/fruits/cherry.png",
                          "width": 23,
                          "fill": true,
                          "close": true
                      },
                      {
                          "height": 20,
                          "replaceColor": true,
                          "src": "https://particles.js.org/images/fruits/grapes.png",
                          "width": 20,
                          "fill": true,
                          "close": true
                      },
                      {
                          "height": 20,
                          "replaceColor": true,
                          "src": "https://particles.js.org/images/fruits/lemon.png",
                          "width": 20,
                          "fill": true,
                          "close": true
                      }
                  ]
              },
              "type": [
                  "image",
                  "circle"
              ]
          },
          "size": {
              "animation": {
                  "enable": true,
                  "speed": 4,
                  "sync": false
              },
              "value": {
                  "min": 10,
                  "max": 30
              }
          }
      },
      "pauseOnBlur": true,
      "background": {
          "color": "#0d47a1",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "reactNightSky": {
      "name": "React Night Sky",
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "push": {
                  "quantity": 1
              }
          }
      },
      "particles": {
          "color": {
              "value": "#FFF"
          },
          "links": {
              "blink": false,
              "color": {
                  "value": "#fff"
              },
              "consent": false,
              "distance": 150,
              "enable": true,
              "opacity": 0.02,
              "shadow": {
                  "blur": 5,
                  "color": {
                      "value": "lime"
                  },
                  "enable": false
              },
              "width": 1
          },
          "move": {
              "attract": {
                  "enable": false,
                  "rotate": {
                      "x": 3000,
                      "y": 3000
                  }
              },
              "direction": "right",
              "enable": true,
              "outModes": "bounce",
              "speed": 0.05
          },
          "collisions": {
              "enable": true
          },
          "number": {
              "density": {
                  "enable": true
              },
              "value": 60
          },
          "opacity": {
              "animation": {
                  "enable": true,
                  "speed": 1,
                  "sync": false
              },
              "value": {
                  "min": 0.05,
                  "max": 0.5
              }
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": 1
          }
      },
      "pauseOnBlur": true,
      "background": {
          "color": "#0d47a1",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "reactPolygonMask": {
      "name": "React Polygon Mask",
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "bubble"
              }
          },
          "modes": {
              "bubble": {
                  "distance": 40,
                  "duration": 0.4,
                  "opacity": 1,
                  "size": 6
              }
          }
      },
      "particles": {
          "color": {
              "value": "#FFF"
          },
          "links": {
              "blink": false,
              "color": {
                  "value": "#fff"
              },
              "consent": false,
              "distance": 30,
              "enable": true,
              "opacity": 0.4,
              "shadow": {
                  "blur": 5,
                  "color": {
                      "value": "lime"
                  },
                  "enable": false
              },
              "width": 1
          },
          "move": {
              "enable": true,
              "outModes": "bounce",
              "speed": 1
          },
          "number": {
              "value": 200
          },
          "opacity": {
              "animation": {
                  "enable": true,
                  "speed": 2,
                  "sync": false
              },
              "value": {
                  "min": 0.05,
                  "max": 0.4
              }
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": 1
          }
      },
      "polygon": {
          "draw": {
              "enable": true,
              "stroke": {
                  "color": "rgba(255, 255, 255, .2)",
                  "width": 0.5,
                  "opacity": 0.2
              }
          },
          "enable": true,
          "inline": {
              "arrangement": "equidistant"
          },
          "move": {
              "radius": 10,
              "type": "path"
          },
          "scale": 0.5,
          "type": "inline",
          "url": "https://particles.js.org/images/smalldeer.svg"
      },
      "pauseOnBlur": true,
      "background": {
          "color": "#0d47a1",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "reactSimple": {
      "name": "React Simple",
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              }
          },
          "modes": {
              "repulse": {
                  "distance": 100,
                  "duration": 5
              }
          }
      },
      "particles": {
          "color": {
              "value": "#FFF"
          },
          "links": {
              "blink": false,
              "color": {
                  "value": "#fff"
              },
              "consent": false,
              "distance": 150,
              "enable": true,
              "opacity": 0.6,
              "shadow": {
                  "blur": 5,
                  "color": {
                      "value": "lime"
                  },
                  "enable": false
              },
              "width": 1
          },
          "move": {
              "enable": true,
              "outModes": "bounce",
              "speed": 3
          },
          "collisions": {
              "enable": true
          },
          "number": {
              "value": 50
          },
          "opacity": {
              "animation": {
                  "enable": true,
                  "speed": 1,
                  "sync": false
              },
              "value": {
                  "min": 0.1,
                  "max": 0.5
              }
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": 3
          },
          "shadow": {
              "blur": 0,
              "color": {
                  "value": "#000000"
              },
              "enable": false,
              "offset": {
                  "x": 0,
                  "y": 0
              }
          },
          "stroke": {
              "color": {
                  "value": "#ff0000"
              },
              "width": 0,
              "opacity": 1
          }
      },
      "polygon": {
          "draw": {
              "enable": false,
              "stroke": {
                  "color": "rgba(255, 255, 255, .1)",
                  "width": 0.5,
                  "opacity": 0.1
              }
          },
          "enable": false,
          "inline": {
              "arrangement": "one-per-point"
          },
          "move": {
              "radius": 10,
              "type": "path"
          },
          "scale": 1,
          "type": "inline",
          "url": ""
      },
      "backgroundMask": {
          "cover": {
              "color": {
                  "value": "#fff"
              },
              "opacity": 1
          },
          "enable": false
      },
      "pauseOnBlur": true,
      "background": {
          "color": "#0d47a1",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "reactSnow": {
      "name": "React Snow",
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "remove"
              }
          },
          "modes": {
              "bubble": {
                  "distance": 200,
                  "duration": 0.4,
                  "opacity": 1,
                  "size": 80
              },
              "connect": {
                  "distance": 80,
                  "links": {
                      "opacity": 0.5
                  },
                  "radius": 60
              },
              "grab": {
                  "distance": 180,
                  "links": {
                      "opacity": 0.35
                  }
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 10
              },
              "repulse": {
                  "distance": 100,
                  "duration": 5
              },
              "slow": {
                  "factor": 1,
                  "radius": 0
              }
          }
      },
      "particles": {
          "color": {
              "value": "#FFF"
          },
          "links": {
              "blink": false,
              "color": {
                  "value": "#fff"
              },
              "consent": false,
              "distance": 150,
              "enable": false,
              "opacity": 0.6,
              "shadow": {
                  "blur": 5,
                  "color": {
                      "value": "lime"
                  },
                  "enable": false
              },
              "width": 1
          },
          "move": {
              "direction": "bottom",
              "enable": true,
              "speed": 3
          },
          "collisions": {
              "enable": true
          },
          "number": {
              "value": 160
          },
          "opacity": {
              "animation": {
                  "enable": true,
                  "speed": 1,
                  "sync": false
              },
              "value": {
                  "min": 0.1,
                  "max": 0.5
              }
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 10
              }
          }
      },
      "pauseOnBlur": true,
      "background": {
          "color": "#0d47a1",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "reduceDuplicates": {
      "name": "Reduce Duplicates",
      "particles": {
          "color": {
              "value": "#ffffff"
          },
          "move": {
              "direction": "none",
              "enable": true,
              "outModes": "bounce",
              "speed": 2
          },
          "number": {
              "value": 16
          },
          "opacity": {
              "value": 1
          },
          "reduceDuplicates": true,
          "rotate": {
              "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": false
              },
              "direction": "random",
              "value": {
                  "min": 0,
                  "max": 360
              }
          },
          "shape": {
              "options": {
                  "image": [
                      {
                          "src": "https://particles.js.org/images/fruits/apple.png",
                          "width": 32,
                          "height": 32
                      },
                      {
                          "src": "https://particles.js.org/images/fruits/avocado.png",
                          "width": 32,
                          "height": 32
                      },
                      {
                          "src": "https://particles.js.org/images/fruits/banana.png",
                          "width": 32,
                          "height": 32
                      },
                      {
                          "src": "https://particles.js.org/images/fruits/berries.png",
                          "width": 32,
                          "height": 32
                      },
                      {
                          "src": "https://particles.js.org/images/fruits/cherry.png",
                          "width": 32,
                          "height": 32
                      },
                      {
                          "src": "https://particles.js.org/images/fruits/grapes.png",
                          "width": 32,
                          "height": 32
                      },
                      {
                          "src": "https://particles.js.org/images/fruits/lemon.png",
                          "width": 32,
                          "height": 32
                      },
                      {
                          "src": "https://particles.js.org/images/fruits/orange.png",
                          "width": 32,
                          "height": 32
                      },
                      {
                          "src": "https://particles.js.org/images/fruits/peach.png",
                          "width": 32,
                          "height": 32
                      },
                      {
                          "src": "https://particles.js.org/images/fruits/pear.png",
                          "width": 32,
                          "height": 32
                      },
                      {
                          "src": "https://particles.js.org/images/fruits/pepper.png",
                          "width": 32,
                          "height": 32
                      },
                      {
                          "src": "https://particles.js.org/images/fruits/plum.png",
                          "width": 32,
                          "height": 32
                      },
                      {
                          "src": "https://particles.js.org/images/fruits/star.png",
                          "width": 32,
                          "height": 32
                      },
                      {
                          "src": "https://particles.js.org/images/fruits/strawberry.png",
                          "width": 32,
                          "height": 32
                      },
                      {
                          "src": "https://particles.js.org/images/fruits/watermelon.png",
                          "width": 32,
                          "height": 32
                      },
                      {
                          "src": "https://particles.js.org/images/fruits/watermelon_slice.png",
                          "width": 32,
                          "height": 32
                      }
                  ]
              },
              "type": "image"
          },
          "size": {
              "value": 16
          }
      },
      "background": {
          "color": "#fff"
      }
  },
  "repulse": {
      "name": "Repulse",
      "particles": {
          "groups": {
              "green": {
                  "number": {
                      "value": 30
                  },
                  "color": {
                      "value": "#00ff00"
                  },
                  "repulse": {
                      "enabled": true,
                      "distance": 50,
                      "factor": 20
                  }
              },
              "yellow": {
                  "number": {
                      "value": 30
                  },
                  "color": {
                      "value": "#ffff00"
                  },
                  "repulse": {
                      "enabled": false,
                      "distance": 0
                  }
              },
              "blue": {
                  "number": {
                      "value": 30
                  },
                  "color": {
                      "value": "#0000ff"
                  },
                  "repulse": {
                      "enabled": true,
                      "distance": 50
                  }
              },
              "cyan": {
                  "number": {
                      "value": 30
                  },
                  "color": {
                      "value": "#00ffff"
                  },
                  "repulse": {
                      "enabled": false,
                      "distance": 0
                  }
              }
          },
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": false,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": 14
          },
          "links": {
              "enable": true,
              "distance": 100,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 3
          }
      },
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "push": {
                  "quantity": 4
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "repulseBack": {
      "name": "Repulse Back",
      "particles": {
          "number": {
              "value": 200,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "move": {
              "enable": true,
              "speed": 0
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              }
          },
          "modes": {
              "repulse": {
                  "distance": 200,
                  "factor": 1,
                  "speed": 5,
                  "easing": "ease-out-back"
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "repulseCirc": {
      "name": "Repulse Circ",
      "particles": {
          "number": {
              "value": 200,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "move": {
              "enable": true,
              "speed": 0
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              }
          },
          "modes": {
              "repulse": {
                  "distance": 200,
                  "factor": 1,
                  "speed": 5,
                  "easing": "ease-out-circ"
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "repulseCubic": {
      "name": "Repulse Cubic",
      "particles": {
          "number": {
              "value": 200,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "move": {
              "enable": true,
              "speed": 0
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              }
          },
          "modes": {
              "repulse": {
                  "distance": 200,
                  "factor": 1,
                  "speed": 5,
                  "easing": "ease-out-cubic"
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "repulseExpo": {
      "name": "Repulse Expo",
      "particles": {
          "number": {
              "value": 200,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "move": {
              "enable": true,
              "speed": 0
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              }
          },
          "modes": {
              "repulse": {
                  "distance": 200,
                  "factor": 1,
                  "speed": 5,
                  "easing": "ease-out-expo"
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "repulseQuart": {
      "name": "Repulse Quart",
      "particles": {
          "number": {
              "value": 200,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "move": {
              "enable": true,
              "speed": 0
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              }
          },
          "modes": {
              "repulse": {
                  "distance": 200,
                  "factor": 1,
                  "speed": 5,
                  "easing": "ease-out-quart"
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "repulseQuint": {
      "name": "Repulse Quint",
      "particles": {
          "number": {
              "value": 200,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "move": {
              "enable": true,
              "speed": 0
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              }
          },
          "modes": {
              "repulse": {
                  "distance": 200,
                  "factor": 1,
                  "speed": 5,
                  "easing": "ease-out-quint"
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "repulseSine": {
      "name": "Repulse Sine",
      "particles": {
          "number": {
              "value": 200,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "move": {
              "enable": true,
              "speed": 0
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              }
          },
          "modes": {
              "repulse": {
                  "distance": 200,
                  "factor": 1,
                  "speed": 5,
                  "easing": "ease-out-sine"
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "responsive": {
      "name": "Responsive",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": false
              }
          },
          "color": {
              "value": "#ff0000"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "links": {
              "enable": true,
              "distance": 100,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 3
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "responsive": [
          {
              "maxWidth": 600,
              "options": {
                  "particles": {
                      "color": {
                          "value": "#0000ff"
                      },
                      "number": {
                          "value": 40
                      }
                  }
              }
          },
          {
              "maxWidth": 1000,
              "options": {
                  "particles": {
                      "color": {
                          "value": "#00ff00"
                      },
                      "number": {
                          "value": 60
                      }
                  }
              }
          }
      ],
      "background": {
          "color": "#000000"
      }
  },
  "ring": {
      "name": "Ring",
      "particles": {
          "number": {
              "value": 0,
              "limit": {
                  "value": 1000
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "move": {
              "enable": true,
              "outModes": {
                  "default": "destroy"
              },
              "speed": 1,
              "path": {
                  "enable": true,
                  "delay": {
                      "value": 0.75
                  }
              },
              "trail": {
                  "enable": true,
                  "fill": {
                      "color": "#031927"
                  },
                  "length": 1000
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.05
          },
          "size": {
              "value": 1
          }
      },
      "background": {
          "color": "#031927"
      },
      "emitters": {
          "fill": false,
          "shape": "circle",
          "position": {
              "x": 50,
              "y": 50
          },
          "size": {
              "width": 250,
              "height": 250,
              "mode": "precise"
          },
          "life": {
              "delay": 10,
              "wait": true
          },
          "rate": {
              "delay": 0.1,
              "quantity": 10
          },
          "startCount": 1000
      }
  },
  "seaAnemone": {
      "name": "Sea Anemone",
      "particles": {
          "color": {
              "value": "#FF0000"
          },
          "move": {
              "direction": "none",
              "enable": true,
              "outModes": {
                  "default": "destroy"
              },
              "path": {
                  "clamp": false,
                  "enable": true,
                  "delay": {
                      "value": 0
                  },
                  "generator": "curvesPathGenerator"
              },
              "speed": 1,
              "trail": {
                  "fill": {
                      "color": "#000"
                  },
                  "length": 30,
                  "enable": true
              }
          },
          "number": {
              "density": {
                  "enable": true
              },
              "value": 0
          },
          "opacity": {
              "value": 1
          },
          "shape": {
              "type": "circle"
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 10
              },
              "animation": {
                  "count": 1,
                  "startValue": "min",
                  "enable": true,
                  "speed": 10,
                  "sync": true
              }
          }
      },
      "background": {
          "color": "#000"
      },
      "emitters": {
          "direction": "none",
          "rate": {
              "quantity": 5,
              "delay": 0.3
          },
          "size": {
              "width": 0,
              "height": 0
          },
          "spawnColor": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 10
              }
          },
          "position": {
              "x": 50,
              "y": 50
          }
      }
  },
  "shadow": {
      "name": "Shadow",
      "smooth": true,
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shadow": {
              "enable": true,
              "color": "#000000",
              "blur": 5,
              "offset": {
                  "x": 3,
                  "y": 3
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 5
              }
          },
          "links": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1,
              "shadow": {
                  "enable": true,
                  "blur": 5,
                  "color": "#000000"
              }
          },
          "move": {
              "enable": true,
              "speed": 2
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse",
                  "parallax": {
                      "enable": false,
                      "force": 60,
                      "smooth": 10
                  }
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#0d47a1"
      }
  },
  "shapeArrow": {
      "name": "Shape Arrow",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "none"
          },
          "stroke": {
              "color": "#ff0000",
              "width": 1
          },
          "shape": {
              "type": "arrow",
              "options": {
                  "arrow": {
                      "heightFactor": {
                          "min": 0.3,
                          "max": 0.8
                      },
                      "headWidthFactor": {
                          "min": 0.3,
                          "max": 0.8
                      },
                      "bodyHeightFactor": {
                          "min": 0.3,
                          "max": 0.8
                      }
                  }
              }
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 10,
                  "max": 20
              }
          },
          "move": {
              "enable": true,
              "speed": 6
          },
          "rotate": {
              "path": true
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "shapeCog": {
      "name": "Shape Cog",
      "particles": {
          "color": {
              "value": [
                  "#777",
                  "#333",
                  "#700",
                  "#007",
                  "#070"
              ]
          },
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "shape": {
              "type": "cog",
              "options": {
                  "cog": {
                      "holeRadius": 44,
                      "innerRadius": 72,
                      "innerTaper": 35,
                      "notches": 7,
                      "outerTaper": 50
                  }
              }
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 15,
                  "max": 30
              }
          },
          "links": {
              "enable": false,
              "distance": 100,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "rotate": {
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": false
              }
          },
          "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "shapeEmoji": {
      "name": "Shape Emoji",
      "particles": {
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 16,
                  "max": 32
              }
          },
          "move": {
              "enable": true,
              "gravity": {
                  "enable": true
              },
              "speed": 15,
              "outModes": {
                  "default": "destroy",
                  "top": "none"
              }
          },
          "rotate": {
              "value": {
                  "min": 0,
                  "max": 360
              },
              "direction": "random",
              "move": true,
              "animation": {
                  "enable": true,
                  "speed": 60
              }
          },
          "tilt": {
              "direction": "random",
              "enable": true,
              "move": true,
              "value": {
                  "min": 0,
                  "max": 360
              },
              "animation": {
                  "enable": true,
                  "speed": 60
              }
          },
          "roll": {
              "darken": {
                  "enable": true,
                  "value": 30
              },
              "enlighten": {
                  "enable": true,
                  "value": 30
              },
              "enable": true,
              "mode": "both",
              "speed": {
                  "min": 15,
                  "max": 25
              }
          },
          "wobble": {
              "distance": 30,
              "enable": true,
              "move": true,
              "speed": {
                  "min": -15,
                  "max": 15
              }
          }
      },
      "background": {
          "color": "#000000"
      },
      "emitters": [
          {
              "position": {
                  "x": 0,
                  "y": 33
              },
              "rate": {
                  "delay": 0.1,
                  "quantity": 2
              },
              "particles": {
                  "move": {
                      "direction": "top-right"
                  },
                  "shape": {
                      "type": "emoji",
                      "options": {
                          "emoji": {
                              "value": "🦄"
                          }
                      }
                  }
              }
          },
          {
              "position": {
                  "x": 0,
                  "y": 66
              },
              "rate": {
                  "delay": 0.1,
                  "quantity": 2
              },
              "particles": {
                  "move": {
                      "direction": "top-right"
                  },
                  "shape": {
                      "type": "emoji",
                      "options": {
                          "emoji": {
                              "value": "🌈"
                          }
                      }
                  }
              }
          },
          {
              "position": {
                  "x": 100,
                  "y": 33
              },
              "rate": {
                  "delay": 0.1,
                  "quantity": 2
              },
              "particles": {
                  "move": {
                      "direction": "top-left"
                  },
                  "shape": {
                      "type": "emoji",
                      "options": {
                          "emoji": {
                              "value": "🎉"
                          }
                      }
                  }
              }
          },
          {
              "position": {
                  "x": 100,
                  "y": 66
              },
              "rate": {
                  "delay": 0.1,
                  "quantity": 2
              },
              "particles": {
                  "move": {
                      "direction": "top-left"
                  },
                  "shape": {
                      "type": "emoji",
                      "options": {
                          "emoji": {
                              "value": "🤡"
                          }
                      }
                  }
              }
          },
          {
              "position": {
                  "x": 50,
                  "y": 50
              },
              "rate": {
                  "delay": 0.1,
                  "quantity": 2
              },
              "particles": {
                  "move": {
                      "direction": "top"
                  },
                  "shape": {
                      "type": "emoji",
                      "options": {
                          "emoji": {
                              "value": "👻"
                          }
                      }
                  }
              }
          }
      ]
  },
  "shapeHeart": {
      "name": "Shape Heart",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "heart"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 5,
                  "max": 10
              }
          },
          "links": {
              "enable": true,
              "distance": 100,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 6
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "shapeMultilineText": {
      "name": "Shape Multiline Text",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "text",
              "options": {
                  "text": {
                      "value": "pippo\npluto"
                  }
              }
          },
          "opacity": {
              "value": {
                  "min": 0.5,
                  "max": 1
              }
          },
          "size": {
              "value": {
                  "min": 16,
                  "max": 32
              }
          },
          "move": {
              "enable": true,
              "speed": 6
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "shapeOptions": {
      "name": "Shape Options",
      "particles": {
          "color": {
              "value": "#000"
          },
          "move": {
              "direction": "none",
              "enable": true,
              "speed": 6
          },
          "number": {
              "value": 80
          },
          "rotate": {
              "value": 45,
              "path": true
          },
          "opacity": {
              "value": 1
          },
          "shape": {
              "options": {
                  "image": [
                      {
                          "height": 128,
                          "src": "https://particles.js.org/images/plane_alt.png",
                          "width": 128
                      },
                      {
                          "height": 128,
                          "src": "https://particles.js.org/images/plane_alt.png",
                          "width": 128,
                          "particles": {
                              "rotate": {
                                  "value": 0
                              },
                              "size": {
                                  "animation": {
                                      "enable": true,
                                      "speed": 64
                                  }
                              }
                          }
                      }
                  ]
              },
              "type": "image"
          },
          "size": {
              "value": {
                  "min": 16,
                  "max": 32
              }
          }
      }
  },
  "shapePath": {
      "name": "Shape Path",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "path",
              "options": {
                  "path": [
                      {
                          "segments": [
                              {
                                  "type": "line",
                                  "values": [
                                      {
                                          "x": -0.5,
                                          "y": -0.5
                                      }
                                  ]
                              },
                              {
                                  "type": "bezier",
                                  "values": [
                                      {
                                          "x": -0.5,
                                          "y": 0.5
                                      },
                                      {
                                          "x": 1,
                                          "y": 1
                                      },
                                      {
                                          "x": 1,
                                          "y": 0.5
                                      },
                                      {
                                          "x": 1,
                                          "y": -0.5
                                      }
                                  ]
                              },
                              {
                                  "type": "quadratic",
                                  "values": [
                                      {
                                          "x": 0.5,
                                          "y": 0.5
                                      },
                                      {
                                          "x": 0.5,
                                          "y": -0.5
                                      },
                                      {
                                          "x": -0.5,
                                          "y": 0.5
                                      }
                                  ]
                              },
                              {
                                  "type": "line",
                                  "values": [
                                      {
                                          "x": 0.5,
                                          "y": -0.5
                                      }
                                  ]
                              }
                          ],
                          "half": false
                      },
                      {
                          "segments": [
                              {
                                  "type": "line",
                                  "values": [
                                      {
                                          "x": -1,
                                          "y": -1
                                      }
                                  ]
                              },
                              {
                                  "type": "bezier",
                                  "values": [
                                      {
                                          "x": -1,
                                          "y": 1
                                      },
                                      {
                                          "x": 1,
                                          "y": 1
                                      },
                                      {
                                          "x": 0.5,
                                          "y": 1
                                      },
                                      {
                                          "x": -0.5,
                                          "y": 1
                                      }
                                  ]
                              },
                              {
                                  "type": "quadratic",
                                  "values": [
                                      {
                                          "x": 1,
                                          "y": 1
                                      },
                                      {
                                          "x": 1,
                                          "y": -1
                                      },
                                      {
                                          "x": -1,
                                          "y": 1
                                      }
                                  ]
                              },
                              {
                                  "type": "line",
                                  "values": [
                                      {
                                          "x": 1,
                                          "y": -1
                                      }
                                  ]
                              }
                          ],
                          "half": false
                      }
                  ]
              }
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 5,
                  "max": 50
              }
          },
          "move": {
              "enable": true,
              "speed": 6,
              "direction": "none"
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "shapeRoundedPolygon": {
      "name": "Shape Rounded Polygon",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "links": {
              "enable": true
          },
          "rotate": {
              "value": {
                  "min": 0,
                  "max": 360
              },
              "direction": "clockwise",
              "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": false
              }
          },
          "shape": {
              "type": "rounded-polygon",
              "options": {
                  "rounded-polygon": [
                      {
                          "radius": {
                              "min": 0,
                              "max": 10
                          },
                          "sides": {
                              "min": 3,
                              "max": 8
                          }
                      }
                  ]
              }
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": 30
          },
          "move": {
              "enable": true,
              "speed": 6
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "shapeRoundedRect": {
      "name": "Shape Rounded Rect",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "rotate": {
              "value": {
                  "min": 0,
                  "max": 360
              },
              "direction": "clockwise",
              "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": false
              }
          },
          "links": {
              "enable": true
          },
          "shape": {
              "type": "rounded-rect",
              "options": {
                  "rounded-rect": {
                      "radius": {
                          "min": 5,
                          "max": 15
                      }
                  }
              }
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": 30
          },
          "move": {
              "enable": true,
              "speed": 6
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "shapeSpiral": {
      "name": "Shape Spiral",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "stroke": {
              "color": {
                  "value": "#ff0000",
                  "animation": {
                      "enable": true,
                      "speed": 20,
                      "sync": true
                  }
              },
              "width": 1
          },
          "shape": {
              "type": "spiral",
              "options": {
                  "spiral": {
                      "innerRadius": 0.5,
                      "lineSpacing": 0.5,
                      "fill": false,
                      "close": false
                  }
              }
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 5,
                  "max": 10
              }
          },
          "links": {
              "enable": false,
              "distance": 100,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "rotate": {
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": false
              }
          },
          "move": {
              "enable": true,
              "speed": 6
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "slow": {
      "name": "Slow",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 5
              }
          },
          "links": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 20
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "slow",
                  "parallax": {
                      "enable": false,
                      "force": 60,
                      "smooth": 10
                  }
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              },
              "slow": {
                  "radius": 100,
                  "factor": 3
              }
          }
      },
      "background": {
          "color": "#0d47a1"
      }
  },
  "snow": {
      "name": "Snow",
      "particles": {
          "number": {
              "value": 400,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#fff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": 10
          },
          "move": {
              "enable": true,
              "speed": 2,
              "direction": "bottom",
              "straight": true
          },
          "wobble": {
              "enable": true,
              "distance": 10,
              "speed": 10
          },
          "zIndex": {
              "value": {
                  "min": 0,
                  "max": 100
              },
              "opacityRate": 10,
              "sizeRate": 10,
              "velocityRate": 10
          }
      },
      "background": {
          "color": "#333333"
      }
  },
  "soundsAudio": {
      "name": "Sounds Audio",
      "particles": {
          "number": {
              "value": 0
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 120,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 3,
                  "max": 6
              }
          },
          "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "outModes": "destroy"
          }
      },
      "background": {
          "color": "#000000"
      },
      "emitters": {
          "position": {
              "x": 50,
              "y": 50
          },
          "rate": {
              "quantity": 1,
              "delay": 0.3
          },
          "size": {
              "width": 0,
              "height": 0
          }
      },
      "sounds": {
          "enable": true,
          "events": [
              {
                  "event": "particleRemoved",
                  "audio": [
                      "https://particles.js.org/audio/explosion0.mp3",
                      "https://particles.js.org/audio/explosion1.mp3",
                      "https://particles.js.org/audio/explosion2.mp3"
                  ]
              }
          ],
          "volume": 100
      }
  },
  "soundsLoop": {
      "name": "Sounds Loop",
      "particles": {
          "number": {
              "value": 0
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 120,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 3,
                  "max": 6
              }
          },
          "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "outModes": "destroy"
          }
      },
      "background": {
          "color": "#000000"
      },
      "emitters": {
          "position": {
              "x": 50,
              "y": 50
          },
          "rate": {
              "quantity": 1,
              "delay": 0.3
          },
          "size": {
              "width": 0,
              "height": 0
          }
      },
      "sounds": {
          "enable": true,
          "events": [
              {
                  "event": "soundsUnmuted",
                  "audio": {
                      "loop": true,
                      "source": "https://particles.js.org/audio/nyancat-loop.mp3"
                  }
              }
          ],
          "volume": 100
      }
  },
  "soundsMelodies": {
      "name": "Sounds Melodies",
      "particles": {
          "number": {
              "value": 0
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 120,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 3,
                  "max": 6
              }
          },
          "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "outModes": "destroy"
          }
      },
      "background": {
          "color": "#000000"
      },
      "emitters": {
          "position": {
              "x": 50,
              "y": 50
          },
          "rate": {
              "quantity": 1,
              "delay": 0.3
          },
          "size": {
              "width": 0,
              "height": 0
          }
      },
      "sounds": {
          "enable": true,
          "events": [
              {
                  "event": "particleAdded",
                  "melodies": [
                      {
                          "notes": [
                              {
                                  "duration": 500,
                                  "value": [
                                      "C5",
                                      "E5",
                                      "G5"
                                  ]
                              },
                              {
                                  "duration": 1000,
                                  "value": [
                                      "D5",
                                      "F5",
                                      "A5"
                                  ]
                              }
                          ]
                      }
                  ]
              },
              {
                  "event": "particleRemoved",
                  "melodies": [
                      {
                          "notes": [
                              {
                                  "duration": 500,
                                  "value": [
                                      "E5",
                                      "G5",
                                      "B5"
                                  ]
                              }
                          ]
                      }
                  ]
              }
          ],
          "volume": 10
      }
  },
  "soundsMelodyLoop": {
      "name": "Sounds Melody Loop",
      "particles": {
          "number": {
              "value": 0
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 120,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 3,
                  "max": 6
              }
          },
          "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "outModes": "destroy"
          }
      },
      "background": {
          "color": "#000000"
      },
      "emitters": {
          "position": {
              "x": 50,
              "y": 50
          },
          "rate": {
              "quantity": 1,
              "delay": 0.3
          },
          "size": {
              "width": 0,
              "height": 0
          }
      },
      "sounds": {
          "enable": true,
          "events": [
              {
                  "event": "soundsUnmuted",
                  "melodies": [
                      {
                          "loop": true,
                          "melodies": [
                              {
                                  "notes": [
                                      {
                                          "duration": 217.39,
                                          "value": "E5"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "Eb5"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "E5"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "Eb5"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "E5"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "B4"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "D5"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "C5"
                                      },
                                      {
                                          "duration": 434.78,
                                          "value": "A4"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "pause"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "C4"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "E4"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "A4"
                                      },
                                      {
                                          "duration": 434.78,
                                          "value": "B4"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "pause"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "E4"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "Ab4"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "B4"
                                      },
                                      {
                                          "duration": 434.78,
                                          "value": "C5"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "pause"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "E4"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "E5"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "Eb5"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "E5"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "Eb5"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "E5"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "B4"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "D5"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "C5"
                                      },
                                      {
                                          "duration": 434.78,
                                          "value": "A4"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "pause"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "C4"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "E4"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "A4"
                                      },
                                      {
                                          "duration": 434.78,
                                          "value": "B4"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "pause"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "E4"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "C5"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "B4"
                                      },
                                      {
                                          "duration": 434.78,
                                          "value": "A4"
                                      },
                                      {
                                          "duration": 434.78,
                                          "value": "pause"
                                      }
                                  ]
                              },
                              {
                                  "notes": [
                                      {
                                          "duration": 1739.12,
                                          "value": "pause"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "A2"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "E3"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "A3"
                                      },
                                      {
                                          "duration": 652.17,
                                          "value": "pause"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "E2"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "B2"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "E3"
                                      },
                                      {
                                          "duration": 652.17,
                                          "value": "pause"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "A2"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "E3"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "A3"
                                      },
                                      {
                                          "duration": 1956.51,
                                          "value": "pause"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "A2"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "E3"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "A3"
                                      },
                                      {
                                          "duration": 652.17,
                                          "value": "pause"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "E2"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "B2"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "E3"
                                      },
                                      {
                                          "duration": 652.17,
                                          "value": "pause"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "A2"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "E3"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "A3"
                                      },
                                      {
                                          "duration": 217.39,
                                          "value": "pause"
                                      }
                                  ]
                              }
                          ]
                      }
                  ]
              }
          ],
          "volume": 10
      }
  },
  "soundsNotes": {
      "name": "Sounds Notes",
      "particles": {
          "number": {
              "value": 0
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 120,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 3,
                  "max": 6
              }
          },
          "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "outModes": "destroy"
          }
      },
      "background": {
          "color": "#000000"
      },
      "emitters": {
          "position": {
              "x": 50,
              "y": 50
          },
          "rate": {
              "quantity": 1,
              "delay": 0.3
          },
          "size": {
              "width": 0,
              "height": 0
          }
      },
      "sounds": {
          "enable": true,
          "events": [
              {
                  "event": "particleAdded",
                  "notes": [
                      {
                          "duration": 500,
                          "value": [
                              "C5",
                              "E5",
                              "G5"
                          ]
                      },
                      {
                          "duration": 1000,
                          "value": [
                              "D5",
                              "F5",
                              "A5"
                          ]
                      }
                  ]
              },
              {
                  "event": "particleRemoved",
                  "notes": [
                      {
                          "duration": 500,
                          "value": [
                              "E5",
                              "G5",
                              "B5"
                          ]
                      }
                  ]
              }
          ],
          "volume": 10
      }
  },
  "speedDecay": {
      "name": "Speed Decay",
      "particles": {
          "number": {
              "value": 0
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 10,
                  "max": 15
              }
          },
          "links": {
              "enable": false
          },
          "life": {
              "duration": {
                  "sync": true,
                  "value": 5
              },
              "count": 1
          },
          "move": {
              "enable": true,
              "gravity": {
                  "enable": true
              },
              "speed": 10,
              "outModes": {
                  "default": "bounce",
                  "bottom": "bounce",
                  "left": "destroy",
                  "right": "destroy",
                  "top": "none"
              },
              "trail": {
                  "enable": true,
                  "fill": {
                      "color": "#000000"
                  },
                  "length": 10
              }
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": false,
                  "mode": "repulse",
                  "parallax": {
                      "enable": false,
                      "force": 60,
                      "smooth": 10
                  }
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#000"
      },
      "emitters": {
          "direction": "top",
          "life": {
              "count": 0,
              "duration": 5,
              "delay": 2
          },
          "rate": {
              "delay": 0.1,
              "quantity": 1
          },
          "size": {
              "width": 0,
              "height": 0
          },
          "particles": {
              "bounce": {
                  "vertical": {
                      "value": {
                          "min": 0.4,
                          "max": 0.8
                      }
                  }
              },
              "color": {
                  "value": [
                      "#5bc0eb",
                      "#fde74c",
                      "#9bc53d",
                      "#e55934",
                      "#fa7921"
                  ]
              },
              "links": {
                  "enable": false
              },
              "size": {
                  "value": {
                      "min": 5,
                      "max": 10
                  }
              },
              "opacity": {
                  "value": 0.5
              },
              "move": {
                  "speed": 30,
                  "decay": 0.1
              }
          }
      }
  },
  "spin": {
      "name": "Spin",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": false
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": 10
          },
          "move": {
              "enable": true,
              "speed": {
                  "min": 1,
                  "max": 5
              },
              "spin": {
                  "acceleration": {
                      "min": -1,
                      "max": 1
                  },
                  "enable": true
              },
              "trail": {
                  "enable": true,
                  "fill": {
                      "color": "#000"
                  },
                  "length": 30
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "star": {
      "name": "Star",
      "particles": {
          "number": {
              "value": 10,
              "density": {
                  "enable": false
              }
          },
          "color": {
              "value": "#fff"
          },
          "shape": {
              "type": "star",
              "options": {
                  "star": {
                      "sides": 5
                  }
              }
          },
          "opacity": {
              "value": 0.8
          },
          "size": {
              "value": 4
          },
          "rotate": {
              "value": {
                  "min": 0,
                  "max": 360
              },
              "direction": "clockwise",
              "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": false
              }
          },
          "links": {
              "enable": true,
              "distance": 600,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 2
          },
          "move": {
              "enable": true,
              "speed": 2
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "grab"
              },
              "onClick": {
                  "enable": true,
                  "mode": "bubble"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1,
                      "color": "#f00"
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "color": "#ffff00"
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#111"
      }
  },
  "strokeAnimation": {
      "name": "Stroke Animation",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000",
              "animation": {
                  "enable": true,
                  "speed": 60,
                  "sync": true
              }
          },
          "stroke": {
              "width": 3,
              "color": {
                  "value": "#0000ff",
                  "animation": {
                      "enable": true,
                      "speed": 60,
                      "sync": true
                  }
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          },
          "links": {
              "enable": true,
              "distance": 100,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 6
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  },
  "style": {
      "name": "Style",
      "particles": {
          "number": {
              "value": 200,
              "limit": {
                  "value": 200
              }
          },
          "color": {
              "value": [
                  "#ff0000",
                  "#00ff00",
                  "#0000ff",
                  "#ffff00",
                  "#ff00ff",
                  "#00ffff"
              ],
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": false
              }
          },
          "shape": {
              "type": [
                  "circle",
                  "square",
                  "triangle",
                  "star",
                  "polygon"
              ]
          },
          "opacity": {
              "value": 0.5
          },
          "size": {
              "value": {
                  "min": 50,
                  "max": 100
              }
          },
          "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "trail": {
                  "enable": true,
                  "length": 50,
                  "fill": {
                      "color": "#000"
                  }
              },
              "path": {
                  "enable": true,
                  "delay": {
                      "value": 0.1
                  },
                  "options": {
                      "size": 50,
                      "draw": false,
                      "increment": 0.001
                  },
                  "generator": "perlinNoise"
              }
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "trail"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "push": {
                  "quantity": 4
              },
              "trail": {
                  "delay": 0.1,
                  "pauseOnStop": true
              }
          }
      },
      "background": {
          "color": "#000000"
      },
      "style": {
          "filter": "blur(50px)"
      }
  },
  "svgReplace": {
      "name": "SVG Replace",
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "push"
              },
              "onHover": {
                  "enable": true,
                  "mode": "bubble",
                  "parallax": {
                      "enable": false,
                      "force": 60,
                      "smooth": 10
                  }
              }
          },
          "modes": {
              "bubble": {
                  "distance": 400,
                  "duration": 2,
                  "opacity": 0.8,
                  "size": 40
              },
              "connect": {
                  "distance": 80,
                  "links": {
                      "opacity": 0.5
                  },
                  "radius": 60
              },
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              },
              "repulse": {
                  "distance": 200,
                  "duration": 0.4
              }
          }
      },
      "particles": {
          "color": {
              "value": "#00f"
          },
          "links": {
              "blink": false,
              "color": "#000",
              "consent": false,
              "distance": 150,
              "enable": false,
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 2
          },
          "number": {
              "density": {
                  "enable": true
              },
              "value": 80
          },
          "opacity": {
              "value": {
                  "min": 0.1,
                  "max": 1
              }
          },
          "rotate": {
              "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": false
              },
              "direction": "random",
              "value": {
                  "min": 0,
                  "max": 360
              }
          },
          "shape": {
              "options": {
                  "image": {
                      "name": "canine"
                  }
              },
              "type": "image"
          },
          "size": {
              "value": 16
          }
      },
      "preload": [
          {
              "name": "canine",
              "src": "/images/canine.svg",
              "width": 32,
              "height": 32,
              "replaceColor": true
          }
      ],
      "background": {
          "color": "#fff",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "test": {
      "name": "Test",
      "fullScreen": {
          "enable": false
      },
      "background": {
          "color": "#000"
      },
      "particles": {
          "color": {
              "value": "#ffffff"
          },
          "size": {
              "value": 6
          },
          "links": {
              "enable": true,
              "distance": 200
          },
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "opacity": {
              "value": 0.5
          },
          "shape": {
              "type": "circle"
          }
      }
  },
  "textMask": {
      "name": "Text Mask",
      "smooth": true,
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "bubble",
                  "parallax": {
                      "enable": false,
                      "force": 2,
                      "smooth": 10
                  }
              }
          },
          "modes": {
              "bubble": {
                  "distance": 40,
                  "duration": 2,
                  "opacity": 8,
                  "size": 15
              }
          }
      },
      "particles": {
          "move": {
              "direction": "none",
              "distance": 2,
              "enable": true,
              "speed": 1
          },
          "number": {
              "value": 600
          },
          "color": {
              "value": "random"
          },
          "shape": {
              "type": [
                  "circle",
                  "square",
                  "triangle"
              ]
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          }
      },
      "canvasMask": {
          "enable": true,
          "override": {
              "color": false
          },
          "scale": 1,
          "pixels": {
              "filter": "pixelTextFilter"
          },
          "position": {
              "x": 70,
              "y": 30
          },
          "text": {
              "color": "#ff0000",
              "font": {
                  "size": 500
              },
              "text": "Hello"
          }
      },
      "background": {
          "color": "#000000",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "textMaskMultiline": {
      "name": "Text Mask Multiline",
      "smooth": true,
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "bubble",
                  "parallax": {
                      "enable": false,
                      "force": 2,
                      "smooth": 10
                  }
              }
          },
          "modes": {
              "bubble": {
                  "distance": 40,
                  "duration": 2,
                  "opacity": 8,
                  "size": 15
              }
          }
      },
      "particles": {
          "move": {
              "direction": "none",
              "distance": 2,
              "enable": true,
              "speed": 1
          },
          "number": {
              "value": 600
          },
          "color": {
              "value": "random"
          },
          "shape": {
              "type": [
                  "circle",
                  "square",
                  "triangle"
              ]
          },
          "size": {
              "value": {
                  "min": 1,
                  "max": 3
              }
          }
      },
      "canvasMask": {
          "enable": true,
          "override": {
              "color": false
          },
          "scale": 1,
          "pixels": {
              "filter": "pixelTextFilter"
          },
          "position": {
              "x": 50,
              "y": 50
          },
          "text": {
              "color": "#ff0000",
              "font": {
                  "size": 300
              },
              "text": "Hello\nWorld\nHello\nWorld",
              "lines": {
                  "spacing": 50
              }
          }
      },
      "background": {
          "color": "#000000",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  },
  "themes": {
      "name": "Themes",
      "themes": [
          {
              "name": "light",
              "default": {
                  "value": true,
                  "auto": true,
                  "mode": "light"
              },
              "options": {
                  "background": {
                      "color": "#ffffff"
                  },
                  "particles": {
                      "color": {
                          "value": [
                              "#000000",
                              "#0000ff"
                          ]
                      }
                  }
              }
          },
          {
              "name": "dark",
              "default": {
                  "value": true,
                  "auto": true,
                  "mode": "dark"
              },
              "options": {
                  "background": {
                      "color": "#000000"
                  },
                  "particles": {
                      "color": {
                          "value": [
                              "#ffffff",
                              "#ff0000"
                          ]
                      }
                  }
              }
          },
          {
              "name": "red",
              "options": {
                  "background": {
                      "color": "#ff0000"
                  },
                  "particles": {
                      "color": {
                          "value": [
                              "#ffffff",
                              "#000000"
                          ]
                      }
                  }
              }
          },
          {
              "name": "green",
              "options": {
                  "background": {
                      "color": "#00ff00"
                  },
                  "particles": {
                      "color": {
                          "value": [
                              "#000000",
                              "#0000ff"
                          ]
                      }
                  }
              }
          },
          {
              "name": "blue",
              "options": {
                  "background": {
                      "color": "#0000ff"
                  },
                  "particles": {
                      "color": {
                          "value": [
                              "#ffffff",
                              "#00ff00"
                          ]
                      }
                  }
              }
          },
          {
              "name": "yellow",
              "options": {
                  "background": {
                      "color": "#ffff00"
                  },
                  "particles": {
                      "color": {
                          "value": [
                              "#000000",
                              "#ff0000"
                          ]
                      }
                  }
              }
          },
          {
              "name": "cyan",
              "options": {
                  "background": {
                      "color": "#00ffff"
                  },
                  "particles": {
                      "color": {
                          "value": [
                              "#000000",
                              "#ff00ff"
                          ]
                      }
                  }
              }
          },
          {
              "name": "grey",
              "options": {
                  "background": {
                      "color": "#777777"
                  },
                  "particles": {
                      "color": {
                          "value": [
                              "#ffffff",
                              "#000000"
                          ]
                      }
                  }
              }
          }
      ],
      "fpsLimit": 60,
      "particles": {
          "number": {
              "value": 30,
              "density": {
                  "enable": true
              }
          },
          "shape": {
              "type": [
                  "circle",
                  "square"
              ]
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": {
                  "min": 15,
                  "max": 30
              }
          },
          "rotate": {
              "value": 0,
              "direction": "random",
              "animation": {
                  "speed": 5,
                  "enable": true
              }
          },
          "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "outModes": "out"
          }
      },
      "interactivity": {
          "detectsOn": "canvas",
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          }
      },
      "detectRetina": true
  },
  "tilt": {
      "name": "Tilt",
      "background": {
          "color": "#000000"
      },
      "particles": {
          "bounce": {
              "vertical": {
                  "value": 0
              },
              "horizontal": {
                  "value": 0
              }
          },
          "color": {
              "value": [
                  "#1E00FF",
                  "#FF0061",
                  "#E1FF00",
                  "#00FF9E"
              ],
              "animation": {
                  "enable": true,
                  "speed": 30
              }
          },
          "move": {
              "decay": {
                  "min": 0.05,
                  "max": 0.15
              },
              "direction": "top",
              "enable": true,
              "gravity": {
                  "acceleration": 9.81,
                  "enable": true,
                  "maxSpeed": 200
              },
              "outModes": {
                  "top": "none",
                  "default": "destroy"
              },
              "speed": {
                  "min": 50,
                  "max": 150
              }
          },
          "number": {
              "value": 0,
              "limit": {
                  "value": 300
              }
          },
          "opacity": {
              "value": 1,
              "animation": {
                  "enable": false,
                  "startValue": "max",
                  "destroy": "min",
                  "speed": 0.3,
                  "sync": true
              }
          },
          "rotate": {
              "value": {
                  "min": 0,
                  "max": 360
              }
          },
          "tilt": {
              "direction": "random",
              "enable": true,
              "move": true,
              "value": {
                  "min": 0,
                  "max": 360
              },
              "animation": {
                  "enable": true,
                  "speed": 60
              }
          },
          "shape": {
              "type": "square"
          },
          "size": {
              "value": 30
          }
      },
      "emitters": {
          "position": {
              "x": 50,
              "y": 100
          },
          "size": {
              "width": 0,
              "height": 0
          },
          "rate": {
              "quantity": 5,
              "delay": 0.1
          }
      }
  },
  "trail": {
      "name": "Trails",
      "background": {
          "color": "#000"
      },
      "emitters": {
          "position": {
              "x": 50,
              "y": 50
          },
          "size": {
              "width": 50,
              "height": 50,
              "mode": "precise"
          },
          "rate": {
              "delay": 1,
              "quantity": 10
          }
      },
      "particles": {
          "number": {
              "value": 0,
              "limit": {
                  "value": 300
              }
          },
          "color": {
              "value": [
                  "#5bc0eb",
                  "#fde74c",
                  "#9bc53d",
                  "#e55934",
                  "#fa7921"
              ]
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": 3
          },
          "move": {
              "enable": true,
              "speed": 1,
              "outModes": "destroy",
              "path": {
                  "enable": true,
                  "delay": {
                      "value": 0.1
                  },
                  "options": {
                      "size": 20,
                      "draw": false,
                      "increment": 0.001
                  },
                  "generator": "perlinNoise"
              },
              "trail": {
                  "enable": true,
                  "fill": {
                      "color": "#000000"
                  },
                  "length": 20
              }
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": false,
                  "mode": "grab"
              },
              "onClick": {
                  "enable": false,
                  "mode": "repulse"
              }
          },
          "modes": {
              "grab": {
                  "distance": 200,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      }
  },
  "trailImage": {
      "name": "Trails Image",
      "background": {
          "color": "#ffffff",
          "image": "url('https://particles.js.org/images/background3.jpg')",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      },
      "emitters": {
          "position": {
              "x": 50,
              "y": 50
          },
          "size": {
              "width": 50,
              "height": 50,
              "mode": "precise"
          },
          "rate": {
              "delay": 1,
              "quantity": 10
          }
      },
      "particles": {
          "number": {
              "value": 0,
              "limit": {
                  "value": 300
              }
          },
          "color": {
              "value": [
                  "#5bc0eb",
                  "#fde74c",
                  "#9bc53d",
                  "#e55934",
                  "#fa7921"
              ]
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": 1
          },
          "links": {
              "enable": false,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 1,
              "direction": "none",
              "random": false,
              "straight": false,
              "outModes": {
                  "default": "destroy"
              },
              "path": {
                  "enable": true,
                  "delay": {
                      "value": 0.1
                  },
                  "options": {
                      "size": 5,
                      "draw": false,
                      "increment": 0.001
                  },
                  "generator": "perlinNoise"
              },
              "trail": {
                  "enable": true,
                  "fill": {
                      "image": "https://particles.js.org/images/background3.jpg"
                  },
                  "length": 20
              }
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": false,
                  "mode": "grab"
              },
              "onClick": {
                  "enable": false,
                  "mode": "repulse"
              }
          },
          "modes": {
              "grab": {
                  "distance": 200,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      }
  },
  "triangles": {
      "name": "Triangles",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "shape": {
              "type": [
                  "polygon",
                  "triangle"
              ],
              "options": {
                  "polygon": {
                      "sides": 3,
                      "particles": {
                          "color": {
                              "value": "f00"
                          }
                      }
                  },
                  "triangle": {
                      "particles": {
                          "color": {
                              "value": "0f0"
                          }
                      }
                  }
              }
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": 30
          },
          "move": {
              "enable": true,
              "speed": 1
          }
      },
      "background": {
          "color": "#000"
      }
  },
  "twinkle": {
      "name": "Twinkle",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ff0000"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": {
                  "min": 0.1,
                  "max": 0.5
              },
              "animation": {
                  "enable": true,
                  "speed": 3,
                  "sync": false
              }
          },
          "size": {
              "value": {
                  "min": 0.1,
                  "max": 5
              },
              "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": false
              }
          },
          "links": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 2
          },
          "twinkle": {
              "particles": {
                  "enable": true,
                  "color": "#ffff00",
                  "frequency": 0.05,
                  "opacity": 1
              },
              "lines": {
                  "enable": true,
                  "color": "#ff0000",
                  "frequency": 0.005,
                  "opacity": 1
              }
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "links": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              },
              "remove": {
                  "quantity": 2
              }
          }
      },
      "background": {
          "color": "#0d47a1"
      }
  },
  "vibrate": {
      "name": "Vibrate",
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": {
                  "min": 0.1,
                  "max": 0.5
              },
              "animation": {
                  "enable": true,
                  "speed": 3,
                  "sync": false
              }
          },
          "size": {
              "value": {
                  "min": 0.1,
                  "max": 5
              },
              "animation": {
                  "enable": true,
                  "speed": 20
              }
          },
          "links": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 0,
              "vibrate": true
          }
      },
      "interactivity": {
          "events": {
              "onHover": {
                  "enable": true,
                  "mode": "repulse"
              },
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "quantity": 4
              }
          }
      },
      "background": {
          "color": "#0d47a1"
      }
  },
  "virus": {
      "name": "Virus",
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "push"
              },
              "onHover": {
                  "enable": true,
                  "mode": "bubble"
              }
          },
          "modes": {
              "bubble": {
                  "distance": 400,
                  "duration": 2,
                  "opacity": 0.8,
                  "size": 40
              },
              "push": {
                  "quantity": 4
              }
          }
      },
      "particles": {
          "color": {
              "value": "#ffffff"
          },
          "links": {
              "color": "#323031",
              "distance": 150,
              "enable": false,
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "outModes": "bounce",
              "speed": 6
          },
          "number": {
              "density": {
                  "enable": true
              },
              "value": 170
          },
          "opacity": {
              "value": 0.5
          },
          "shape": {
              "options": {
                  "image": {
                      "height": 32,
                      "replaceColor": true,
                      "src": "https://particles.js.org/images/sars-cov-2.png",
                      "width": 32
                  }
              },
              "type": "image"
          },
          "size": {
              "value": 16
          }
      },
      "background": {
          "color": "#323031"
      }
  },
  "warp": {
      "name": "Warp",
      "fullScreen": false,
      "fpsLimit": 120,
      "manualParticles": [
          {
              "position": {
                  "x": 2,
                  "y": 2
              }
          },
          {
              "position": {
                  "x": 2,
                  "y": 98
              }
          },
          {
              "position": {
                  "x": 98,
                  "y": 2
              }
          },
          {
              "position": {
                  "x": 98,
                  "y": 98
              }
          },
          {
              "position": {
                  "x": 3,
                  "y": 1
              }
          },
          {
              "position": {
                  "x": 99,
                  "y": 2
              }
          },
          {
              "position": {
                  "x": 3,
                  "y": 2
              }
          },
          {
              "position": {
                  "x": 99,
                  "y": 1
              }
          }
      ],
      "particles": {
          "number": {
              "value": 0
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": 3
          },
          "links": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "warp": true,
              "opacity": 1,
              "width": 1
          },
          "move": {
              "enable": false,
              "speed": 2,
              "outModes": "out",
              "warp": true
          }
      },
      "background": {
          "color": "#0d47a1"
      }
  },
  "wobble": {
      "name": "Wobble",
      "background": {
          "color": "#000000"
      },
      "particles": {
          "bounce": {
              "vertical": {
                  "value": 0
              },
              "horizontal": {
                  "value": 0
              }
          },
          "color": {
              "value": [
                  "#1E00FF",
                  "#FF0061",
                  "#E1FF00",
                  "#00FF9E"
              ],
              "animation": {
                  "enable": true,
                  "speed": 30
              }
          },
          "move": {
              "decay": {
                  "min": 0.05,
                  "max": 0.15
              },
              "direction": "top",
              "enable": true,
              "gravity": {
                  "acceleration": 9.81,
                  "enable": true,
                  "maxSpeed": 200
              },
              "outModes": {
                  "top": "none",
                  "default": "destroy"
              },
              "speed": {
                  "min": 50,
                  "max": 150
              }
          },
          "number": {
              "value": 0,
              "limit": {
                  "value": 300
              }
          },
          "opacity": {
              "value": 1,
              "animation": {
                  "enable": false,
                  "startValue": "max",
                  "destroy": "min",
                  "speed": 0.3,
                  "sync": true
              }
          },
          "rotate": {
              "value": {
                  "min": 0,
                  "max": 360
              },
              "direction": "random",
              "move": true,
              "animation": {
                  "enable": true,
                  "speed": 60
              }
          },
          "tilt": {
              "direction": "random",
              "enable": true,
              "move": true,
              "value": {
                  "min": 0,
                  "max": 360
              },
              "animation": {
                  "enable": true,
                  "speed": 60
              }
          },
          "shape": {
              "type": [
                  "circle",
                  "square",
                  "polygon"
              ],
              "options": {
                  "polygon": [
                      {
                          "sides": 5
                      },
                      {
                          "sides": 6
                      }
                  ]
              }
          },
          "size": {
              "value": 3
          },
          "roll": {
              "darken": {
                  "enable": true,
                  "value": 30
              },
              "enlighten": {
                  "enable": true,
                  "value": 30
              },
              "enable": true,
              "mode": "both",
              "speed": {
                  "min": 15,
                  "max": 25
              }
          },
          "wobble": {
              "distance": 30,
              "enable": true,
              "move": true,
              "speed": {
                  "min": -15,
                  "max": 15
              }
          }
      },
      "emitters": {
          "position": {
              "x": 50,
              "y": 100
          },
          "size": {
              "width": 0,
              "height": 0
          },
          "rate": {
              "quantity": 10,
              "delay": 0.05
          }
      }
  },
  "zIndex": {
      "name": "Z Index",
      "particles": {
          "groups": {
              "z5000": {
                  "number": {
                      "value": 70
                  },
                  "zIndex": {
                      "value": 50
                  }
              },
              "z7500": {
                  "number": {
                      "value": 30
                  },
                  "zIndex": {
                      "value": 75
                  }
              },
              "z2500": {
                  "number": {
                      "value": 50
                  },
                  "zIndex": {
                      "value": 25
                  }
              },
              "z1000": {
                  "number": {
                      "value": 40
                  },
                  "zIndex": {
                      "value": 10
                  }
              }
          },
          "number": {
              "value": 200
          },
          "color": {
              "value": "#fff",
              "animation": {
                  "enable": false,
                  "speed": 20,
                  "sync": true
              }
          },
          "shape": {
              "type": "circle"
          },
          "opacity": {
              "value": 1
          },
          "size": {
              "value": 3
          },
          "move": {
              "angle": {
                  "value": 10,
                  "offset": 0
              },
              "enable": true,
              "speed": 5,
              "direction": "right"
          },
          "zIndex": {
              "value": 5,
              "opacityRate": 0.5
          }
      },
      "interactivity": {
          "events": {
              "onClick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "push": {
                  "quantity": 4,
                  "groups": [
                      "z5000",
                      "z7500",
                      "z2500",
                      "z1000"
                  ]
              }
          }
      },
      "background": {
          "color": "#000000"
      }
  }
}
export default particlesConfig