if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'tetris'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'tetris'.");
}
if (typeof kudens === 'undefined') {
  throw new Error("Error loading module 'tetris'. Its dependency 'kudens' was not found. Please, check whether 'kudens' is loaded prior to 'tetris'.");
}
var tetris = function (_, Kotlin, $module$kudens) {
  'use strict';
  var texture_0 = $module$kudens.com.persesgames.texture;
  var text_0 = $module$kudens.com.persesgames.text;
  var game_0 = $module$kudens.com.persesgames.game;
  var Screen = $module$kudens.com.persesgames.game.Screen;
  var SpriteBatch = $module$kudens.com.persesgames.sprite.SpriteBatch;
  var Sprite = $module$kudens.com.persesgames.sprite.Sprite;
  var DrawMode = $module$kudens.com.persesgames.game.DrawMode;
  WelcomeScreen.prototype = Object.create(Screen.prototype);
  WelcomeScreen.prototype.constructor = WelcomeScreen;
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
    game_0.Game.view.drawMode = DrawMode.LINEAR;
    game_0.Game.view.minAspectRatio = 160.0 / 240.0;
    game_0.Game.view.maxAspectRatio = 160.0 / 240.0;
    game_0.Game.start_ocgj3q$(new WelcomeScreen());
  }
  var package$games = _.games || (_.games = {});
  var package$perses = package$games.perses || (package$games.perses = {});
  var package$tetris = package$perses.tetris || (package$perses.tetris = {});
  package$tetris.WelcomeScreen = WelcomeScreen;
  package$tetris.main_kand9s$ = main;
  SCALE = 4.0;
  Kotlin.defineModule('tetris', _);
  main([]);
  return _;
}(typeof tetris === 'undefined' ? {} : tetris, kotlin, kudens);

//@ sourceMappingURL=tetris.js.map
