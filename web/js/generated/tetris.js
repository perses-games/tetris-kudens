if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'tetris'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'tetris'.");
}
if (typeof kudens === 'undefined') {
  throw new Error("Error loading module 'tetris'. Its dependency 'kudens' was not found. Please, check whether 'kudens' is loaded prior to 'tetris'.");
}
var tetris = function (_, Kotlin, $module$kudens) {
  'use strict';
  var to = Kotlin.kotlin.to_ujzrz7$;
  var Enum = Kotlin.kotlin.Enum;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var texture_0 = $module$kudens.com.persesgames.texture;
  var game_0 = $module$kudens.com.persesgames.game;
  var Screen = $module$kudens.com.persesgames.game.Screen;
  var SpriteBatch = $module$kudens.com.persesgames.sprite.SpriteBatch;
  var Sprite = $module$kudens.com.persesgames.sprite.Sprite;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var text_0 = $module$kudens.com.persesgames.text;
  var DrawMode = $module$kudens.com.persesgames.game.DrawMode;
  var color_0 = $module$kudens.com.persesgames.color;
  PieceType.prototype = Object.create(Enum.prototype);
  PieceType.prototype.constructor = PieceType;
  GameScreen.prototype = Object.create(Screen.prototype);
  GameScreen.prototype.constructor = GameScreen;
  WelcomeScreen.prototype = Object.create(Screen.prototype);
  WelcomeScreen.prototype.constructor = WelcomeScreen;
  function PieceType(name, ordinal, positions) {
    Enum.call(this);
    this.positions = positions;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PieceType_initFields() {
    PieceType_initFields = function () {
    };
    PieceType$I_instance = new PieceType('I', 0, [to(0, 0), to(-1, 0), to(1, 0), to(2, 0)]);
    PieceType$J_instance = new PieceType('J', 1, [to(0, 0), to(-1, 0), to(1, 0), to(1, 1)]);
    PieceType$L_instance = new PieceType('L', 2, [to(0, 0)]);
    PieceType$O_instance = new PieceType('O', 3, [to(0, 0)]);
    PieceType$S_instance = new PieceType('S', 4, [to(0, 0)]);
    PieceType$T_instance = new PieceType('T', 5, [to(0, 0)]);
    PieceType$Z_instance = new PieceType('Z', 6, [to(0, 0)]);
  }
  var PieceType$I_instance;
  function PieceType$I_getInstance() {
    PieceType_initFields();
    return PieceType$I_instance;
  }
  var PieceType$J_instance;
  function PieceType$J_getInstance() {
    PieceType_initFields();
    return PieceType$J_instance;
  }
  var PieceType$L_instance;
  function PieceType$L_getInstance() {
    PieceType_initFields();
    return PieceType$L_instance;
  }
  var PieceType$O_instance;
  function PieceType$O_getInstance() {
    PieceType_initFields();
    return PieceType$O_instance;
  }
  var PieceType$S_instance;
  function PieceType$S_getInstance() {
    PieceType_initFields();
    return PieceType$S_instance;
  }
  var PieceType$T_instance;
  function PieceType$T_getInstance() {
    PieceType_initFields();
    return PieceType$T_instance;
  }
  var PieceType$Z_instance;
  function PieceType$Z_getInstance() {
    PieceType_initFields();
    return PieceType$Z_instance;
  }
  function PieceType$getPositions$lambda(it) {
    return to(0, 0);
  }
  PieceType.prototype.getPositions_za3lpa$ = function (orientation) {
    var tmp$;
    var result = Kotlin.newArrayF(this.positions.length, PieceType$getPositions$lambda);
    tmp$ = result.length - 1 | 0;
    for (var index = 0; index <= tmp$; index++) {
      if (orientation === 0)
        result[index] = to(this.positions[index].first, this.positions[index].second);
      else if (orientation === 1)
        result[index] = to(this.positions[index].second, this.positions[index].first);
      else if (orientation === 2)
        result[index] = to(-this.positions[index].first, this.positions[index].second);
      else if (orientation === 3)
        result[index] = to(this.positions[index].second, -this.positions[index].first);
    }
    return result;
  };
  PieceType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PieceType',
    interfaces: [Enum]
  };
  function PieceType$values() {
    return [PieceType$I_getInstance(), PieceType$J_getInstance(), PieceType$L_getInstance(), PieceType$O_getInstance(), PieceType$S_getInstance(), PieceType$T_getInstance(), PieceType$Z_getInstance()];
  }
  PieceType.values = PieceType$values;
  function PieceType$valueOf(name) {
    switch (name) {
      case 'I':
        return PieceType$I_getInstance();
      case 'J':
        return PieceType$J_getInstance();
      case 'L':
        return PieceType$L_getInstance();
      case 'O':
        return PieceType$O_getInstance();
      case 'S':
        return PieceType$S_getInstance();
      case 'T':
        return PieceType$T_getInstance();
      case 'Z':
        return PieceType$Z_getInstance();
      default:Kotlin.throwISE('No enum constant games.perses.tetris.PieceType.' + name);
    }
  }
  PieceType.valueOf_61zpoe$ = PieceType$valueOf;
  function Piece(type) {
    this.type = type;
    this.orientation = 0;
    this.x = 5;
    this.y = 22;
  }
  Piece.prototype.clear_bwh3i6$ = function (playfield) {
    var tmp$, tmp$_0;
    tmp$ = this.type.getPositions_za3lpa$(this.orientation);
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var position = tmp$[tmp$_0];
      var xx = this.x + position.first | 0;
      var yy = this.y + position.second | 0;
      if (playfield.length > yy) {
        var line = playfield[yy];
        if (line.length > xx) {
          line[xx] = ' ';
        }
      }
    }
  };
  Piece.prototype.draw_bwh3i6$ = function (playfield) {
    var tmp$, tmp$_0;
    tmp$ = this.type.getPositions_za3lpa$(this.orientation);
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var position = tmp$[tmp$_0];
      var xx = this.x + position.first | 0;
      var yy = this.y + position.second | 0;
      if (playfield.length > yy) {
        var line = playfield[yy];
        if (line.length > xx) {
          println('draw: ' + xx + ', ' + yy + ' -> ' + this.type.name);
          line[xx] = this.type.name;
        }
      }
    }
  };
  Piece.prototype.moveLeft_bwh3i6$ = function (playfield) {
  };
  Piece.prototype.moveRight_bwh3i6$ = function (playfield) {
  };
  Piece.prototype.moveDown_bwh3i6$ = function (playfield) {
    this.clear_bwh3i6$(playfield);
    this.y = this.y - 1 | 0;
    this.draw_bwh3i6$(playfield);
  };
  Piece.prototype.turn_bwh3i6$ = function (playfield) {
    this.clear_bwh3i6$(playfield);
    this.orientation = this.orientation + 1 | 0;
    if (this.orientation > 3) {
      this.orientation = this.orientation - 4 | 0;
    }
    this.draw_bwh3i6$(playfield);
  };
  Piece.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Piece',
    interfaces: []
  };
  function GameScreen() {
    Screen.call(this);
    this.sprites = new SpriteBatch();
    this.playfield = Kotlin.newArrayF(22, GameScreen$playfield$lambda);
    this.blocks = mapOf([to('I', new Sprite('I')), to('J', new Sprite('J')), to('L', new Sprite('L')), to('O', new Sprite('O')), to('S', new Sprite('S')), to('T', new Sprite('T')), to('Z', new Sprite('Z'))]);
    this.timePerTick = 2.5;
    this.timeTillNextTick = 1.0;
    this.piece = new Piece(PieceType$J_getInstance());
  }
  GameScreen.prototype.loadResources = function () {
    texture_0.Textures.create_56dudh$('RED', 8, 8, Block_getInstance().create_mx4ult$(0.0));
    texture_0.Textures.create_56dudh$('GREEN', 8, 8, Block_getInstance().create_mx4ult$(0.33));
    texture_0.Textures.create_56dudh$('BLUE', 8, 8, Block_getInstance().create_mx4ult$(0.66));
    texture_0.Textures.create_56dudh$('I', 8, 8, Block_getInstance().create_mx4ult$(0.5));
    texture_0.Textures.create_56dudh$('J', 8, 8, Block_getInstance().create_mx4ult$(0.625));
    texture_0.Textures.create_56dudh$('L', 8, 8, Block_getInstance().create_mx4ult$(0.0625));
    texture_0.Textures.create_56dudh$('O', 8, 8, Block_getInstance().create_mx4ult$(0.125));
    texture_0.Textures.create_56dudh$('S', 8, 8, Block_getInstance().create_mx4ult$(0.25));
    texture_0.Textures.create_56dudh$('T', 8, 8, Block_getInstance().create_mx4ult$(0.75));
    texture_0.Textures.create_56dudh$('Z', 8, 8, Block_getInstance().create_mx4ult$(0.0));
    game_0.Game.setClearColor_7b5o5w$(1.0, 1.0, 1.0, 1.0);
    this.piece.y = 10;
    this.piece.orientation = 3;
    this.piece.draw_bwh3i6$(this.playfield);
    this.playfield[0] = ['I', 'I', 'I', 'I', 'I', 'I', 'I'];
  };
  GameScreen.prototype.update_dleff0$ = function (time, delta) {
    this.timeTillNextTick -= delta;
    if (this.timeTillNextTick < 0.0) {
      this.timeTillNextTick += this.timePerTick;
      this.tick();
    }
  };
  GameScreen.prototype.tick = function () {
    this.piece.turn_bwh3i6$(this.playfield);
    this.piece.moveDown_bwh3i6$(this.playfield);
  };
  GameScreen.prototype.render = function () {
    var tmp$, tmp$_0, tmp$_1;
    var y = 40.0;
    tmp$ = this.playfield.length - 1 | 0;
    for (var line = 0; line <= tmp$; line++) {
      var x = 40.0;
      tmp$_0 = this.playfield[line];
      for (tmp$_1 = 0; tmp$_1 !== tmp$_0.length; ++tmp$_1) {
        var char = tmp$_0[tmp$_1];
        var block = this.blocks.get_11rb$(char);
        if (block != null) {
          this.sprites.draw_xrfpo0$(block, x, y, 10.0);
        }
        x += 80.0;
      }
      y += 80.0;
    }
    this.sprites.render();
  };
  function GameScreen$playfield$lambda$lambda(it) {
    return ' ';
  }
  function GameScreen$playfield$lambda(it) {
    return Kotlin.newArrayF(10, GameScreen$playfield$lambda$lambda);
  }
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
    game_0.Game.view.setToWidth_mx4ult$(800.0);
    game_0.Game.view.drawMode = DrawMode.LINEAR;
    game_0.Game.view.minAspectRatio = 160.0 / 320.0;
    game_0.Game.view.maxAspectRatio = 160.0 / 320.0;
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
  Object.defineProperty(PieceType, 'I', {
    get: PieceType$I_getInstance
  });
  Object.defineProperty(PieceType, 'J', {
    get: PieceType$J_getInstance
  });
  Object.defineProperty(PieceType, 'L', {
    get: PieceType$L_getInstance
  });
  Object.defineProperty(PieceType, 'O', {
    get: PieceType$O_getInstance
  });
  Object.defineProperty(PieceType, 'S', {
    get: PieceType$S_getInstance
  });
  Object.defineProperty(PieceType, 'T', {
    get: PieceType$T_getInstance
  });
  Object.defineProperty(PieceType, 'Z', {
    get: PieceType$Z_getInstance
  });
  var package$games = _.games || (_.games = {});
  var package$perses = package$games.perses || (package$games.perses = {});
  var package$tetris = package$perses.tetris || (package$perses.tetris = {});
  package$tetris.PieceType = PieceType;
  package$tetris.Piece = Piece;
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
  SATURATION = 0.75;
  Kotlin.defineModule('tetris', _);
  main([]);
  return _;
}(typeof tetris === 'undefined' ? {} : tetris, kotlin, kudens);

//@ sourceMappingURL=tetris.js.map
