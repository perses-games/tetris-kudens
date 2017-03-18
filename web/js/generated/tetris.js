if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'tetris'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'tetris'.");
}
if (typeof kudens === 'undefined') {
  throw new Error("Error loading module 'tetris'. Its dependency 'kudens' was not found. Please, check whether 'kudens' is loaded prior to 'tetris'.");
}
var tetris = function (_, Kotlin, $module$kudens) {
  'use strict';
  var input_0 = $module$kudens.com.persesgames.input;
  var texture_0 = $module$kudens.com.persesgames.texture;
  var game_0 = $module$kudens.com.persesgames.game;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var KeyCode = $module$kudens.com.persesgames.input.KeyCode;
  var text_0 = $module$kudens.com.persesgames.text;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Screen = $module$kudens.com.persesgames.game.Screen;
  var SpriteBatch = $module$kudens.com.persesgames.sprite.SpriteBatch;
  var Sprite = $module$kudens.com.persesgames.sprite.Sprite;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var color_0 = $module$kudens.com.persesgames.color;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var InputProcessor = $module$kudens.com.persesgames.input.InputProcessor;
  var Enum = Kotlin.kotlin.Enum;
  var DrawMode = $module$kudens.com.persesgames.game.DrawMode;
  GameScreen.prototype = Object.create(Screen.prototype);
  GameScreen.prototype.constructor = GameScreen;
  PieceType.prototype = Object.create(Enum.prototype);
  PieceType.prototype.constructor = PieceType;
  WelcomeScreen.prototype = Object.create(Screen.prototype);
  WelcomeScreen.prototype.constructor = WelcomeScreen;
  function GameScreen() {
    Screen.call(this);
    this.sprites = new SpriteBatch();
    this.playfield = Kotlin.newArrayF(22, GameScreen$playfield$lambda);
    this.blocks = mapOf([to('I', new Sprite('I')), to('J', new Sprite('J')), to('L', new Sprite('L')), to('O', new Sprite('O')), to('S', new Sprite('S')), to('T', new Sprite('T')), to('Z', new Sprite('Z'))]);
    this.timePerTick = 1.0;
    this.timeTillNextTick = this.timePerTick;
    this.score = new Score();
    this.shadowColor = color_0.Color.hslToRgb_y2kzbl$(0.125, SATURATION, SHADOW);
    this.textColor = color_0.Color.hslToRgb_y2kzbl$(0.125, SATURATION, NORMAL);
    this.gameOver = false;
    this.greyBlocks = [new Sprite(''), new Sprite('GREY_1'), new Sprite('GREY_2'), new Sprite('GREY_3'), new Sprite('GREY_4'), new Sprite('GREY_5'), new Sprite('GREY_6'), new Sprite('GREY_7'), new Sprite('GREY_8'), new Sprite('GREY_9')];
    this.keys_0 = HashMap_init();
    this.deltaY = 0;
    this.piece = new Piece();
  }
  GameScreen.prototype.loadResources = function () {
    input_0.Keys.setInputProcessor_wjqqmu$(this);
    texture_0.Textures.create_56dudh$('RED', 8, 8, Block_getInstance().create_mx4ult$(0.0));
    texture_0.Textures.create_56dudh$('GREEN', 8, 8, Block_getInstance().create_mx4ult$(0.33));
    texture_0.Textures.create_56dudh$('BLUE', 8, 8, Block_getInstance().create_mx4ult$(0.66));
    texture_0.Textures.create_56dudh$('GREY_9', 8, 8, Block_getInstance().createGrey_mx4ult$(0.9));
    texture_0.Textures.create_56dudh$('GREY_8', 8, 8, Block_getInstance().createGrey_mx4ult$(0.8));
    texture_0.Textures.create_56dudh$('GREY_7', 8, 8, Block_getInstance().createGrey_mx4ult$(0.7));
    texture_0.Textures.create_56dudh$('GREY_6', 8, 8, Block_getInstance().createGrey_mx4ult$(0.6));
    texture_0.Textures.create_56dudh$('GREY_5', 8, 8, Block_getInstance().createGrey_mx4ult$(0.5));
    texture_0.Textures.create_56dudh$('GREY_4', 8, 8, Block_getInstance().createGrey_mx4ult$(0.4));
    texture_0.Textures.create_56dudh$('GREY_3', 8, 8, Block_getInstance().createGrey_mx4ult$(0.3));
    texture_0.Textures.create_56dudh$('GREY_2', 8, 8, Block_getInstance().createGrey_mx4ult$(0.2));
    texture_0.Textures.create_56dudh$('GREY_1', 8, 8, Block_getInstance().createGrey_mx4ult$(0.1));
    texture_0.Textures.create_56dudh$('I', 8, 8, Block_getInstance().create_mx4ult$(0.5));
    texture_0.Textures.create_56dudh$('J', 8, 8, Block_getInstance().create_mx4ult$(0.625));
    texture_0.Textures.create_56dudh$('L', 8, 8, Block_getInstance().create_mx4ult$(0.0625));
    texture_0.Textures.create_56dudh$('O', 8, 8, Block_getInstance().create_mx4ult$(0.125));
    texture_0.Textures.create_56dudh$('S', 8, 8, Block_getInstance().create_mx4ult$(0.25));
    texture_0.Textures.create_56dudh$('T', 8, 8, Block_getInstance().create_mx4ult$(0.75));
    texture_0.Textures.create_56dudh$('Z', 8, 8, Block_getInstance().create_mx4ult$(0.0));
    game_0.Game.setClearColor_7b5o5w$(1.0, 1.0, 1.0, 1.0);
  };
  GameScreen.prototype.keyDown_za3lpa$ = function (keyCode) {
  };
  GameScreen.prototype.keyPressed_za3lpa$ = function (charCode) {
    println('keypress: ' + charCode);
    if (charCode === KeyCode.LEFT.keyCode) {
      if (this.piece.canMoveLeft_bwh3i6$(this.playfield)) {
        this.piece.moveLeft();
      }
    }
     else if (charCode === KeyCode.RIGHT.keyCode) {
      if (this.piece.canMoveLeft_bwh3i6$(this.playfield)) {
        this.piece.moveLeft();
      }
    }
     else if (charCode === KeyCode.UP.keyCode) {
      if (this.piece.canTurn_bwh3i6$(this.playfield)) {
        this.piece.turn();
      }
    }
     else if (charCode === KeyCode.DOWN.keyCode)
      if (this.piece.canMoveDown_bwh3i6$(this.playfield)) {
        this.piece.moveDown();
      }
  };
  GameScreen.prototype.keyUp_za3lpa$ = function (keyCode) {
  };
  GameScreen.prototype.pointerClick_nhq4am$ = function (pointer, x, y) {
  };
  GameScreen.prototype.checkInput_0 = function (delta) {
    if (input_0.Keys.wasPressed_5wr77w$(KeyCode.LEFT.keyCode, delta * 1000)) {
      if (this.piece.canMoveLeft_bwh3i6$(this.playfield)) {
        this.piece.moveLeft();
      }
    }
     else if (input_0.Keys.wasPressed_5wr77w$(KeyCode.RIGHT.keyCode, delta * 1000)) {
      if (this.piece.canMoveRight_bwh3i6$(this.playfield)) {
        this.piece.moveRight();
      }
    }
     else if (input_0.Keys.wasPressed_5wr77w$(KeyCode.UP.keyCode, delta * 1000)) {
      if (this.piece.canTurn_bwh3i6$(this.playfield)) {
        this.piece.turn();
      }
    }
     else if (input_0.Keys.wasPressed_5wr77w$(KeyCode.DOWN.keyCode, delta * 1000)) {
      if (this.piece.canMoveDown_bwh3i6$(this.playfield)) {
        this.piece.moveDown();
        this.score.tick();
      }
    }
  };
  GameScreen.prototype.update_dleff0$ = function (time, delta) {
    var tick = false;
    this.timeTillNextTick -= delta;
    while (this.timeTillNextTick < 0.0) {
      this.timeTillNextTick += this.timePerTick;
      tick = true;
    }
    if (this.gameOver) {
      return;
    }
    this.checkInput_0(delta);
    if (tick) {
      if (!this.piece.canMoveDown_bwh3i6$(this.playfield)) {
        if (this.piece.y === 21) {
          this.gameOver = true;
        }
         else {
          this.nextPiece_0();
        }
      }
      this.tick();
    }
    this.deltaY = this.deltaY + (delta * 80.0 | 0) | 0;
    while (this.deltaY > 320) {
      this.deltaY = this.deltaY - 320 | 0;
    }
  };
  GameScreen.prototype.nextPiece_0 = function () {
    this.piece.nextPiece_bwh3i6$(this.playfield);
    this.removeFilledLines_0();
  };
  GameScreen.prototype.tick = function () {
    if (this.piece.canMoveDown_bwh3i6$(this.playfield)) {
      this.piece.moveDown();
    }
    this.score.tick();
  };
  GameScreen.prototype.drawGrey_0 = function (x, y, c) {
    this.sprites.draw_xrfpo0$(this.greyBlocks[c], 40.0 + x * 80.0, -this.deltaY + 40.0 + y * 80.0, 10.0);
  };
  GameScreen.prototype.render = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    for (var x = 0; x <= 2; x++) {
      for (var y = 0; y <= 5; y++) {
        var xx = x * 4 | 0;
        var yy = y * 4 | 0;
        this.drawGrey_0(xx + 0 | 0, yy + 0 | 0, 4);
        this.drawGrey_0(xx + 1 | 0, yy + 0 | 0, 4);
        this.drawGrey_0(xx + 1 | 0, yy + 1 | 0, 4);
        this.drawGrey_0(xx + 2 | 0, yy + 0 | 0, 4);
        this.drawGrey_0(xx + 0 | 0, yy + 1 | 0, 3);
        this.drawGrey_0(xx + 0 | 0, yy + 2 | 0, 3);
        this.drawGrey_0(xx + 1 | 0, yy + 2 | 0, 3);
        this.drawGrey_0(xx + 0 | 0, yy + 3 | 0, 3);
        this.drawGrey_0(xx + 1 | 0, yy + 3 | 0, 1);
        this.drawGrey_0(xx + 2 | 0, yy + 3 | 0, 1);
        this.drawGrey_0(xx + 2 | 0, yy + 2 | 0, 1);
        this.drawGrey_0(xx + 3 | 0, yy + 3 | 0, 1);
        this.drawGrey_0(xx + 3 | 0, yy + 0 | 0, 2);
        this.drawGrey_0(xx + 3 | 0, yy + 1 | 0, 2);
        this.drawGrey_0(xx + 2 | 0, yy + 1 | 0, 2);
        this.drawGrey_0(xx + 3 | 0, yy + 2 | 0, 2);
      }
    }
    this.sprites.render();
    var y_0 = 40.0;
    tmp$ = this.playfield.length - 1 | 0;
    for (var line = 0; line <= tmp$; line++) {
      var x_0 = 40.0;
      tmp$_0 = this.playfield[line];
      for (tmp$_1 = 0; tmp$_1 !== tmp$_0.length; ++tmp$_1) {
        var char = tmp$_0[tmp$_1];
        var block = this.blocks.get_11rb$(char);
        if (block != null) {
          this.sprites.draw_xrfpo0$(block, x_0, y_0, 10.0);
        }
        x_0 += 80.0;
      }
      y_0 += 80.0;
    }
    var px = this.piece.x * 80.0 + 40.0;
    var py = this.piece.y * 80.0 + 40.0;
    var block_0 = this.blocks.get_11rb$(this.piece.type.name);
    if (block_0 != null) {
      tmp$_2 = this.piece.type.getPositions_za3lpa$(this.piece.orientation);
      for (tmp$_3 = 0; tmp$_3 !== tmp$_2.length; ++tmp$_3) {
        var position = tmp$_2[tmp$_3];
        this.sprites.draw_xrfpo0$(block_0, px + position.first * 80.0, py + position.second * 80.0, 10.0);
      }
    }
    this.sprites.render();
    var fs = this.score.formatted();
    text_0.Texts.drawText_k35s1u$(10.0, 58.0, fs, 'bold 48pt Arial', 'rgba(' + this.shadowColor[0] + ', ' + this.shadowColor[1] + ', ' + this.shadowColor[2] + ', 1)');
    text_0.Texts.drawText_k35s1u$(7.0, 55.0, fs, 'bold 48pt Arial', 'rgba(' + this.textColor[0] + ', ' + this.textColor[0] + ', ' + this.textColor[0] + ', 0.9)');
    if (this.gameOver) {
      text_0.Texts.drawText_k35s1u$(53.0, 803.0, 'GAME OVER!', 'bold 80pt Arial', 'rgba(55,0,0,1)');
      text_0.Texts.drawText_k35s1u$(50.0, 800.0, 'GAME OVER!', 'bold 80pt Arial', 'rgba(255,0,0,0.9)');
    }
  };
  function GameScreen$removeFilledLines$lambda(it) {
    return ' ';
  }
  GameScreen.prototype.removeFilledLines_0 = function () {
    var toRemove = ArrayList_init();
    for (var y = 0; y <= 21; y++) {
      var empty = false;
      for (var x = 0; x <= 9; x++) {
        if (Kotlin.equals(this.playfield[y][x], ' ')) {
          empty = true;
          break;
        }
      }
      if (!empty) {
        toRemove.add_11rb$(y);
      }
    }
    var linesRemoved = 0;
    while (!toRemove.isEmpty()) {
      var line = toRemove.removeAt_za3lpa$(0) - linesRemoved | 0;
      println('remove line ' + line);
      for (var y_0 = line; y_0 <= 20; y_0++) {
        this.playfield[y_0] = this.playfield[y_0 + 1 | 0];
      }
      this.playfield[21] = Kotlin.newArrayF(10, GameScreen$removeFilledLines$lambda);
      linesRemoved = linesRemoved + 1 | 0;
    }
    this.score.linesRemoved_za3lpa$(linesRemoved);
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
    interfaces: [InputProcessor, Screen]
  };
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
    PieceType$L_instance = new PieceType('L', 2, [to(0, 0), to(-1, 0), to(-1, 1), to(1, 0)]);
    PieceType$O_instance = new PieceType('O', 3, [to(0, 0), to(1, 0), to(0, 1), to(1, 1)]);
    PieceType$S_instance = new PieceType('S', 4, [to(0, 0), to(1, 0), to(0, -1), to(-1, -1)]);
    PieceType$T_instance = new PieceType('T', 5, [to(0, 0), to(-1, 0), to(1, 0), to(0, -1)]);
    PieceType$Z_instance = new PieceType('Z', 6, [to(0, 0), to(-1, 0), to(0, -1), to(1, -1)]);
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
        result[index] = to(this.positions[index].second, -this.positions[index].first);
      else if (orientation === 2)
        result[index] = to(-this.positions[index].first, -this.positions[index].second);
      else if (orientation === 3)
        result[index] = to(-this.positions[index].second, this.positions[index].first);
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
    game_0.Game.view.drawMode = DrawMode.NEAREST;
    game_0.Game.view.minAspectRatio = 160.0 / 320.0;
    game_0.Game.view.maxAspectRatio = 160.0 / 320.0;
    game_0.Game.start_ocgj3q$(new GameScreen());
  }
  var LIGHT;
  var NORMAL;
  var DARK;
  var SHADOW;
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
  Block.prototype.createGrey_mx4ult$ = function (lightness) {
    var array = new Uint8Array((4 * 8 | 0) * 8 | 0);
    var light = color_0.Color.hslToRgb_y2kzbl$(0.0, 0.0, lightness + 0.1);
    var normal = color_0.Color.hslToRgb_y2kzbl$(0.0, 0.0, lightness);
    var dark = color_0.Color.hslToRgb_y2kzbl$(0.0, 0.0, lightness - 0.1);
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
      new Block();
    }
    return Block_instance;
  }
  function Piece() {
    this.type = PieceType$values()[Math.random() * PieceType$values().length | 0];
    this.orientation = 0;
    this.x = 5;
    this.y = 21;
  }
  Piece.prototype.moveLeft = function () {
    this.x = this.x - 1 | 0;
  };
  Piece.prototype.moveRight = function () {
    this.x = this.x + 1 | 0;
  };
  Piece.prototype.moveDown = function () {
    this.y = this.y - 1 | 0;
  };
  Piece.prototype.canMoveDown_bwh3i6$ = function (playfield) {
    var tmp$;
    var result = true;
    var positions = this.type.getPositions_za3lpa$(this.orientation);
    for (tmp$ = 0; tmp$ !== positions.length; ++tmp$) {
      var pos = positions[tmp$];
      if ((this.y + pos.second - 1 | 0) < 0 || (this.x + pos.first | 0) < 0 || (this.x + pos.first | 0) > 9) {
        return false;
      }
      result = (result && Kotlin.equals(playfield[this.y + pos.second - 1 | 0][this.x + pos.first | 0], ' '));
    }
    return result;
  };
  Piece.prototype.canMoveLeft_bwh3i6$ = function (playfield) {
    var tmp$;
    var result = true;
    var positions = this.type.getPositions_za3lpa$(this.orientation);
    for (tmp$ = 0; tmp$ !== positions.length; ++tmp$) {
      var pos = positions[tmp$];
      if ((this.y + pos.second | 0) < 0 || (this.y + pos.second | 0) > 21 || (this.x + pos.first - 1 | 0) < 0 || (this.x + pos.first - 1 | 0) > 9) {
        return false;
      }
      result = (result && Kotlin.equals(playfield[this.y + pos.second | 0][this.x + pos.first - 1 | 0], ' '));
    }
    return result;
  };
  Piece.prototype.canMoveRight_bwh3i6$ = function (playfield) {
    var tmp$;
    var result = true;
    var positions = this.type.getPositions_za3lpa$(this.orientation);
    for (tmp$ = 0; tmp$ !== positions.length; ++tmp$) {
      var pos = positions[tmp$];
      if ((this.y + pos.second | 0) < 0 || (this.y + pos.second | 0) > 21 || (this.x + pos.first + 1 | 0) < 0 || (this.x + pos.first + 1 | 0) > 9) {
        return false;
      }
      result = (result && Kotlin.equals(playfield[this.y + pos.second | 0][this.x + pos.first + 1 | 0], ' '));
    }
    return result;
  };
  Piece.prototype.canTurn_bwh3i6$ = function (playfield) {
    var tmp$;
    var result = true;
    var newOrient = this.orientation + 1 | 0;
    if (newOrient > 3) {
      newOrient = newOrient - 4 | 0;
    }
    var positions = this.type.getPositions_za3lpa$(newOrient);
    for (tmp$ = 0; tmp$ !== positions.length; ++tmp$) {
      var pos = positions[tmp$];
      if ((this.y + pos.second | 0) < 0 || (this.y + pos.second | 0) > 21 || (this.x + pos.first | 0) < 0 || (this.x + pos.first | 0) > 9) {
        return false;
      }
      result = (result && Kotlin.equals(playfield[this.y + pos.second | 0][this.x + pos.first | 0], ' '));
    }
    return result;
  };
  Piece.prototype.turn = function () {
    this.orientation = this.orientation + 1 | 0;
    if (this.orientation > 3) {
      this.orientation = this.orientation - 4 | 0;
    }
  };
  Piece.prototype.nextPiece_bwh3i6$ = function (playfield) {
    var tmp$, tmp$_0;
    tmp$ = this.type.getPositions_za3lpa$(this.orientation);
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var pos = tmp$[tmp$_0];
      playfield[pos.second + this.y | 0][pos.first + this.x | 0] = this.type.name;
    }
    this.orientation = 0;
    this.x = 5;
    this.y = 21;
    this.type = PieceType$values()[Math.random() * PieceType$values().length | 0];
  };
  Piece.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Piece',
    interfaces: []
  };
  function Score(score) {
    if (score === void 0)
      score = 0;
    this.score = score;
  }
  Score.prototype.linesRemoved_za3lpa$ = function (lines) {
    var linesLeft = lines;
    var points = 100;
    while (linesLeft > 0) {
      this.score = this.score + points | 0;
      linesLeft = linesLeft - 1 | 0;
      points = points + 100 | 0;
    }
  };
  Score.prototype.tick = function () {
    this.score = this.score + 1 | 0;
  };
  Score.prototype.formatted = function () {
    var result = this.score.toString();
    while (result.length < 8) {
      result = '0' + result;
    }
    return result;
  };
  Score.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Score',
    interfaces: []
  };
  var package$games = _.games || (_.games = {});
  var package$perses = package$games.perses || (package$games.perses = {});
  var package$tetris = package$perses.tetris || (package$perses.tetris = {});
  package$tetris.GameScreen = GameScreen;
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
  package$tetris.PieceType = PieceType;
  package$tetris.WelcomeScreen = WelcomeScreen;
  package$tetris.main_kand9s$ = main;
  Object.defineProperty(package$tetris, 'LIGHT', {
    get: function () {
      return LIGHT;
    }
  });
  Object.defineProperty(package$tetris, 'NORMAL', {
    get: function () {
      return NORMAL;
    }
  });
  Object.defineProperty(package$tetris, 'DARK', {
    get: function () {
      return DARK;
    }
  });
  Object.defineProperty(package$tetris, 'SHADOW', {
    get: function () {
      return SHADOW;
    }
  });
  Object.defineProperty(package$tetris, 'SATURATION', {
    get: function () {
      return SATURATION;
    }
  });
  Object.defineProperty(package$tetris, 'Block', {
    get: Block_getInstance
  });
  package$tetris.Piece = Piece;
  package$tetris.Score = Score;
  SCALE = 4.0;
  LIGHT = 0.6;
  NORMAL = 0.5;
  DARK = 0.4;
  SHADOW = 0.2;
  SATURATION = 0.75;
  Kotlin.defineModule('tetris', _);
  main([]);
  return _;
}(typeof tetris === 'undefined' ? {} : tetris, kotlin, kudens);

//@ sourceMappingURL=tetris.js.map
