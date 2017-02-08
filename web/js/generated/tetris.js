if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'tetris'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'tetris'.");
}
if (typeof kudens === 'undefined') {
  throw new Error("Error loading module 'tetris'. Its dependency 'kudens' was not found. Please, check whether 'kudens' is loaded prior to 'tetris'.");
}
var tetris = function (_, Kotlin, $module$kudens) {
  'use strict';
  var texture_0 = $module$kudens.com.persesgames.texture;
  var Screen = $module$kudens.com.persesgames.game.Screen;
  var SpriteBatch = $module$kudens.com.persesgames.sprite.SpriteBatch;
  var Sprite = $module$kudens.com.persesgames.sprite.Sprite;
  var text_0 = $module$kudens.com.persesgames.text;
  var game_0 = $module$kudens.com.persesgames.game;
  var DrawMode = $module$kudens.com.persesgames.game.DrawMode;
  var color_0 = $module$kudens.com.persesgames.color;
  GameScreen.prototype = Object.create(Screen.prototype);
  GameScreen.prototype.constructor = GameScreen;
  WelcomeScreen.prototype = Object.create(Screen.prototype);
  WelcomeScreen.prototype.constructor = WelcomeScreen;
  function GameScreen() {
    Screen.call(this);
    this.sprites = new SpriteBatch();
    this.red = new Sprite('RED');
    this.green = new Sprite('GREEN');
    this.blue = new Sprite('BLUE');
  }
  GameScreen.prototype.loadResources = function () {
    texture_0.Textures.create_56dudh$('RED', 8, 8, Block_getInstance().create_mx4ult$(0.0));
    texture_0.Textures.create_56dudh$('GREEN', 8, 8, Block_getInstance().create_mx4ult$(0.33));
    texture_0.Textures.create_56dudh$('BLUE', 8, 8, Block_getInstance().create_mx4ult$(0.66));
  };
  GameScreen.prototype.update_dleff0$ = function (time, delta) {
  };
  GameScreen.prototype.render = function () {
    this.sprites.draw_xrfpo0$(this.red, 200.0, 200.0, 25.0);
    this.sprites.draw_xrfpo0$(this.green, 200.0, 500.0, 25.0);
    this.sprites.draw_xrfpo0$(this.blue, 200.0, 800.0, 25.0);
    this.sprites.draw_xrfpo0$(this.red, 400.0, 200.0, 5.0);
    this.sprites.draw_xrfpo0$(this.red, 400.0, 240.0, 5.0);
    this.sprites.draw_xrfpo0$(this.red, 400.0, 280.0, 5.0);
    this.sprites.draw_xrfpo0$(this.red, 440.0, 240.0, 5.0);
    this.sprites.draw_xrfpo0$(this.blue, 440.0, 280.0, 5.0);
    this.sprites.draw_xrfpo0$(this.blue, 480.0, 280.0, 5.0);
    this.sprites.draw_xrfpo0$(this.blue, 480.0, 240.0, 5.0);
    this.sprites.draw_xrfpo0$(this.blue, 480.0, 200.0, 5.0);
    this.sprites.render();
  };
  GameScreen.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'GameScreen',
    interfaces: [Screen]
  };
  var SCALE;
  function WelcomeScreen() {
    Screen.call(this);
    this.sprites = new SpriteBatch();
    this.blue = new Sprite('BLUE');
    this.red = new Sprite('RED');
    this.deltaY = 0.0;
    this.deltaX = 0.0;
  }
  WelcomeScreen.prototype.loadResources = function () {
    texture_0.Textures.load_puj7f4$('BLUE', 'img/blue.png');
    texture_0.Textures.load_puj7f4$('RED', 'img/red.png');
  };
  WelcomeScreen.prototype.update_dleff0$ = function (time, delta) {
    this.deltaY = 10.0 + Math.sin(time / 3.0) * 25.0 * SCALE;
    this.deltaX = Math.cos(time / 5.0) * 25.0 * SCALE;
  };
  WelcomeScreen.prototype.render = function () {
    for (var x = 5; x <= 14; x++) {
      for (var y = 1; y <= 9; y++) {
        this.sprites.draw_xrfpo0$(this.blue, x * 8.0 * SCALE + this.deltaX, y * 8.0 * SCALE + this.deltaY, SCALE * 1.075);
        this.sprites.draw_xrfpo0$(this.red, x * 8.0 * SCALE, 100.0 * SCALE + y * 8.0 * SCALE, SCALE * 1.075);
      }
    }
    this.sprites.render();
    text_0.Texts.drawText_k35s1u$(7.0, 42.0, 'FPS ' + game_0.Game.fps, 'bold 24pt Arial', 'rgba(50, 50, 50, 1)');
    text_0.Texts.drawText_k35s1u$(5.0, 40.0, 'FPS ' + game_0.Game.fps, 'bold 24pt Arial', 'rgba(200, 255, 200, 1)');
  };
  WelcomeScreen.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WelcomeScreen',
    interfaces: [Screen]
  };
  function main(args) {
    game_0.Game.view.setToWidth_mx4ult$(160.0 * SCALE);
    game_0.Game.view.drawMode = DrawMode.NEAREST;
    game_0.Game.view.minAspectRatio = 160.0 / 240.0;
    game_0.Game.view.maxAspectRatio = 160.0 / 240.0;
    game_0.Game.start_ocgj3q$(new GameScreen());
  }
  var LIGHT;
  var NORMAL;
  var DARK;
  var SATURATION;
  function Block() {
    Block_instance = this;
  }
  Block.prototype.create_mx4ult$ = function (hue) {
    var array = new Uint8Array((4 * 8 | 0) * 8 | 0);
    var light = color_0.Color.hslToRgb_y2kzbl$(hue, SATURATION, LIGHT);
    var normal = color_0.Color.hslToRgb_y2kzbl$(hue, SATURATION, NORMAL);
    var dark = color_0.Color.hslToRgb_y2kzbl$(hue, SATURATION, DARK);
    for (var index = 0; index <= 7; index++) {
      array.set([Kotlin.toByte(light[0]), Kotlin.toByte(light[1]), Kotlin.toByte(light[2]), Kotlin.toByte(255)], 4 * ((index * 8 | 0) + 0 | 0) | 0);
      array.set([Kotlin.toByte(dark[0]), Kotlin.toByte(dark[1]), Kotlin.toByte(dark[2]), Kotlin.toByte(255)], 4 * ((index * 8 | 0) + 7 | 0) | 0);
    }
    for (var index_0 = 1; index_0 <= 6; index_0++) {
      array.set([Kotlin.toByte(light[0]), Kotlin.toByte(light[1]), Kotlin.toByte(light[2]), Kotlin.toByte(255)], 4 * ((0 * 8 | 0) + index_0 | 0) | 0);
      array.set([Kotlin.toByte(dark[0]), Kotlin.toByte(dark[1]), Kotlin.toByte(dark[2]), Kotlin.toByte(255)], 4 * ((7 * 8 | 0) + index_0 | 0) | 0);
    }
    for (var x = 1; x <= 6; x++) {
      for (var y = 1; y <= 6; y++) {
        array.set([Kotlin.toByte(normal[0]), Kotlin.toByte(normal[1]), Kotlin.toByte(normal[2]), Kotlin.toByte(255)], 4 * ((y * 8 | 0) + x | 0) | 0);
      }
    }
    return array;
  };
  Block.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Block',
    interfaces: []
  };
  var Block_instance = null;
  function Block_getInstance() {
    if (Block_instance === null) {
      Block_instance = new Block();
    }
    return Block_instance;
  }
  var package$games = _.games || (_.games = {});
  var package$perses = package$games.perses || (package$games.perses = {});
  var package$tetris = package$perses.tetris || (package$perses.tetris = {});
  package$tetris.GameScreen = GameScreen;
  package$tetris.WelcomeScreen = WelcomeScreen;
  package$tetris.main_kand9s$ = main;
  Object.defineProperty(package$tetris, 'Block', {
    get: Block_getInstance
  });
  SCALE = 4.0;
  LIGHT = 0.6;
  NORMAL = 0.5;
  DARK = 0.4;
  SATURATION = 0.5;
  Kotlin.defineModule('tetris', _);
  main([]);
  return _;
}(typeof tetris === 'undefined' ? {} : tetris, kotlin, kudens);

//@ sourceMappingURL=tetris.js.map
