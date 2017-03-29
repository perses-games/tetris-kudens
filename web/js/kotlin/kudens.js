if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kudens'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kudens'.");
}
var kudens = function (_, Kotlin) {
  'use strict';
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var get_indices = Kotlin.kotlin.collections.get_indices_m7z4lg$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var Enum = Kotlin.kotlin.Enum;
  var Exception = Kotlin.kotlin.Exception;
  var toTypedArray = Kotlin.kotlin.collections.toTypedArray_rjqryz$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  DrawMode.prototype = Object.create(Enum.prototype);
  DrawMode.prototype.constructor = DrawMode;
  DefaultScreen.prototype = Object.create(Screen.prototype);
  DefaultScreen.prototype.constructor = DefaultScreen;
  ViewType.prototype = Object.create(Enum.prototype);
  ViewType.prototype.constructor = ViewType;
  KeyCode.prototype = Object.create(Enum.prototype);
  KeyCode.prototype.constructor = KeyCode;
  function Sprite(textureName) {
    this.textureName = textureName;
    this.texture$delegate = lazy(Sprite$texture$lambda(this));
  }
  Object.defineProperty(Sprite.prototype, 'texture', {
    get: function () {
      var $receiver = this.texture$delegate;
      new Kotlin.PropertyMetadata('texture');
      return $receiver.value;
    }
  });
  function Sprite$texture$lambda(this$Sprite) {
    return function () {
      return Textures_getInstance().get_61zpoe$(this$Sprite.textureName);
    };
  }
  Sprite.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Sprite',
    interfaces: []
  };
  function SpriteBatch() {
  }
  SpriteBatch.prototype.draw_kjwdzj$ = function (sprite, x, y, scale, rotation) {
    if (scale === void 0)
      scale = 1.0;
    if (rotation === void 0)
      rotation = 0.0;
    sprite.texture.queueDraw_7b5o5w$(x, y, scale, rotation);
  };
  SpriteBatch.prototype.render = function () {
    Textures_getInstance().render();
  };
  SpriteBatch.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SpriteBatch',
    interfaces: []
  };
  var vertexShaderSource;
  var fragmentShaderSource;
  function TextureData(vMatrix, texture) {
    this.vMatrix = vMatrix;
    this.texture = texture;
  }
  TextureData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TextureData',
    interfaces: []
  };
  function Texture(glTexture, shaderProgram, width, height) {
    this.glTexture = glTexture;
    this.shaderProgram = shaderProgram;
    this.width = width;
    this.height = height;
    this.shaderProgramMesh = new ShaderProgramMesh(this.shaderProgram);
    this.left = -this.width / 2.0;
    this.right = this.width / 2.0;
    this.bottom = -this.height / 2.0;
    this.top = this.height / 2.0;
  }
  Texture.prototype.queueDraw_7b5o5w$ = function (x, y, scale, rotation) {
    this.shaderProgramMesh.queue_8cqhcw$([x, y, this.left, this.bottom, 0.0, 0.0, scale, rotation]);
    this.shaderProgramMesh.queue_8cqhcw$([x, y, this.left, this.top, 0.0, 1.0, scale, rotation]);
    this.shaderProgramMesh.queue_8cqhcw$([x, y, this.right, this.top, 1.0, 1.0, scale, rotation]);
    this.shaderProgramMesh.queue_8cqhcw$([x, y, this.right, this.top, 1.0, 1.0, scale, rotation]);
    this.shaderProgramMesh.queue_8cqhcw$([x, y, this.right, this.bottom, 1.0, 0.0, scale, rotation]);
    this.shaderProgramMesh.queue_8cqhcw$([x, y, this.left, this.bottom, 0.0, 0.0, scale, rotation]);
    if (this.shaderProgramMesh.remaining() < 36) {
      this.render();
    }
  };
  Texture.prototype.queueTileDraw_b3rrsf$ = function (x, y, tcLeft, tcTop, tcRight, tcBottom, scale) {
    this.shaderProgramMesh.queue_8cqhcw$([x, y, this.left, this.bottom, tcLeft, tcBottom, scale, 0.0]);
    this.shaderProgramMesh.queue_8cqhcw$([x, y, this.left, this.top, tcLeft, tcTop, scale, 0.0]);
    this.shaderProgramMesh.queue_8cqhcw$([x, y, this.right, this.top, tcRight, tcTop, scale, 0.0]);
    this.shaderProgramMesh.queue_8cqhcw$([x, y, this.right, this.top, tcRight, tcTop, scale, 0.0]);
    this.shaderProgramMesh.queue_8cqhcw$([x, y, this.right, this.bottom, tcRight, tcBottom, scale, 0.0]);
    this.shaderProgramMesh.queue_8cqhcw$([x, y, this.left, this.bottom, tcLeft, tcBottom, scale, 0.0]);
    if (this.shaderProgramMesh.remaining() < 36) {
      this.render();
    }
  };
  Texture.prototype.render = function () {
    Game_getInstance().gl().activeTexture(WebGLRenderingContext.TEXTURE0);
    Game_getInstance().gl().bindTexture(WebGLRenderingContext.TEXTURE_2D, this.glTexture);
    this.shaderProgramMesh.render_11rb$(new TextureData(Game_getInstance().view.vMatrix, this.glTexture));
  };
  Texture.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Texture',
    interfaces: []
  };
  function Rect(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  Rect.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Rect',
    interfaces: []
  };
  function Size(w, h) {
    this.w = w;
    this.h = h;
  }
  Size.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Size',
    interfaces: []
  };
  function Pivot(x, y) {
    this.x = x;
    this.y = y;
  }
  Pivot.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Pivot',
    interfaces: []
  };
  function SpriteSheetData(frame, rotated, trimmed, spriteSourceSize, sourceSize, pivot) {
    this.frame = frame;
    this.rotated = rotated;
    this.trimmed = trimmed;
    this.spriteSourceSize = spriteSourceSize;
    this.sourceSize = sourceSize;
    this.pivot = pivot;
  }
  SpriteSheetData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SpriteSheetData',
    interfaces: []
  };
  function SpriteSheet(glTexture, shaderProgram, data) {
    this.glTexture = glTexture;
    this.shaderProgram = shaderProgram;
    this.data = data;
  }
  SpriteSheet.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SpriteSheet',
    interfaces: []
  };
  function Textures() {
    Textures_instance = this;
    this.textures = HashMap_init();
    this.startedLoading = 0;
    this.loaded = 0;
    this.shaderProgram = null;
    var setter = Textures_init$lambda;
    var vainfo = [new VertextAttributeInfo('a_position', 2), new VertextAttributeInfo('a_boundingBox', 2), new VertextAttributeInfo('a_texCoord', 2), new VertextAttributeInfo('a_scale', 1), new VertextAttributeInfo('a_rotation', 1)];
    this.shaderProgram = new ShaderProgram(Game_getInstance().gl(), WebGLRenderingContext.TRIANGLES, vertexShaderSource, fragmentShaderSource, vainfo, setter);
  }
  Textures.prototype.loadSpriteSheet_61zpoe$ = function (name) {
  };
  function Textures$load$lambda(closure$webGlTexture, closure$image, this$Textures, closure$name) {
    return function (it) {
      var tmp$;
      this$Textures.textureLoaded_0(closure$webGlTexture, closure$image);
      var texture = new Texture(closure$webGlTexture, this$Textures.shaderProgram, closure$image.width, closure$image.height);
      this$Textures.textures.put_xwzc9p$(closure$name, texture);
      return tmp$ = this$Textures.loaded, this$Textures.loaded = tmp$ + 1 | 0, tmp$;
    };
  }
  Textures.prototype.load_puj7f4$ = function (name, filename) {
    var tmp$;
    var gl = Game_getInstance().gl();
    this.startedLoading = this.startedLoading + 1 | 0;
    var webGlTexture = gl.createTexture();
    if (webGlTexture != null) {
      var image = Kotlin.isType(tmp$ = document.createElement('img'), HTMLImageElement) ? tmp$ : Kotlin.throwCCE();
      image.onload = Textures$load$lambda(webGlTexture, image, this, name);
      image.src = filename;
    }
     else {
      throw new IllegalStateException("Couldn't create webgl texture!");
    }
  };
  Textures.prototype.create_bblzc9$ = function (name, image) {
    var gl = Game_getInstance().gl();
    this.startedLoading = this.startedLoading + 1 | 0;
    var webGlTexture = gl.createTexture();
    if (webGlTexture != null) {
      this.textureLoaded_0(webGlTexture, image);
      var texture = new Texture(webGlTexture, this.shaderProgram, image.width, image.height);
      this.textures.put_xwzc9p$(name, texture);
      this.loaded = this.loaded + 1 | 0;
    }
     else {
      throw new IllegalStateException("Couldn't create webgl texture!");
    }
  };
  Textures.prototype.create_56dudh$ = function (name, width, height, image) {
    var gl = Game_getInstance().gl();
    this.startedLoading = this.startedLoading + 1 | 0;
    var webGlTexture = gl.createTexture();
    if (webGlTexture != null) {
      this.textureLoaded_1(webGlTexture, width, height, image);
      var texture = new Texture(webGlTexture, this.shaderProgram, width, height);
      this.textures.put_xwzc9p$(name, texture);
      this.loaded = this.loaded + 1 | 0;
    }
     else {
      throw new IllegalStateException("Couldn't create webgl texture!");
    }
  };
  Textures.prototype.load_y153k1$ = function (mapTileSet) {
  };
  Textures.prototype.textureLoaded_0 = function (texture, image) {
    var gl = Game_getInstance().gl();
    gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture);
    gl.pixelStorei(WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL, 1);
    gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, image);
    this.setTextureParameters_0();
    gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, null);
  };
  Textures.prototype.textureLoaded_1 = function (texture, width, height, image) {
    var gl = Game_getInstance().gl();
    gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture);
    gl.pixelStorei(WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL, 1);
    gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, width, height, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, image);
    this.setTextureParameters_0();
    gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, null);
  };
  Textures.prototype.setTextureParameters_0 = function () {
    var gl = Game_getInstance().gl();
    if (Game_getInstance().view.drawMode === DrawMode$NEAREST_getInstance()) {
      gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MAG_FILTER, WebGLRenderingContext.NEAREST);
      gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MIN_FILTER, WebGLRenderingContext.NEAREST);
    }
     else {
      gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MAG_FILTER, WebGLRenderingContext.LINEAR);
      gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MIN_FILTER, WebGLRenderingContext.LINEAR);
    }
    gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_T, WebGLRenderingContext.CLAMP_TO_EDGE);
    gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_S, WebGLRenderingContext.CLAMP_TO_EDGE);
  };
  Textures.prototype.ready = function () {
    return this.loaded === this.startedLoading;
  };
  Textures.prototype.has_61zpoe$ = function (name) {
    return this.textures.get_11rb$(name) != null;
  };
  Textures.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    tmp$ = this.textures.get_11rb$(name);
    if (tmp$ == null) {
      throw new IllegalArgumentException('Texture with name ' + name + ' is not loaded!');
    }
    return tmp$;
  };
  Textures.prototype.clear = function () {
  };
  Textures.prototype.render = function () {
    var tmp$_0;
    tmp$_0 = this.textures.entries.iterator();
    while (tmp$_0.hasNext()) {
      var tmp$ = tmp$_0.next();
      var key = tmp$.key;
      var value = tmp$.value;
      value.render();
    }
  };
  function Textures_init$lambda(program, data) {
    program.setUniform1i_bm4lxs$('u_sampler', 0);
    program.setUniformMatrix4fv_pphpxd$('u_projectionView', Game_getInstance().view.vMatrix.getFloat32Array());
  }
  Textures.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Textures',
    interfaces: []
  };
  var Textures_instance = null;
  function Textures_getInstance() {
    if (Textures_instance === null) {
      new Textures();
    }
    return Textures_instance;
  }
  function Map() {
  }
  Map.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Map',
    interfaces: []
  };
  function MapData() {
    this.version = 1;
    this.properties = HashMap_init();
    this.layers = null;
    this.tilesets = null;
    this.height = 0;
    this.width = 0;
    this.nextobjectid = 0;
    this.orientation = 'orthogonal';
    this.renderorder = 'right-down';
    this.tileheight = 0;
    this.tilewidth = 0;
  }
  MapData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MapData',
    interfaces: []
  };
  function MapLayer() {
    this.properties = HashMap_init();
    this.data = null;
    this.encoding = '';
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.name = '';
    this.opacity = 1.0;
    this.type = '';
    this.visible = true;
    this.draworder = '';
  }
  MapLayer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MapLayer',
    interfaces: []
  };
  function MapTileset() {
    this.properties = HashMap_init();
    this.firstgid = 0;
    this.image = '';
    this.imageheight = 0;
    this.imagewidth = 0;
    this.margin = 0;
    this.name = '';
    this.spacing = 0;
    this.tilecount = 0;
    this.tileheight = 0;
    this.tilewidth = 0;
    this.tileproperties = HashMap_init();
  }
  MapTileset.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MapTileset',
    interfaces: []
  };
  function TilesetIndex(texture, tcLeft, tcTop, tcRight, tcBottom, scale) {
    this.texture = texture;
    this.tcLeft = tcLeft;
    this.tcTop = tcTop;
    this.tcRight = tcRight;
    this.tcBottom = tcBottom;
    this.scale = scale;
  }
  TilesetIndex.prototype.render_dleff0$ = function (x, y) {
    var tmp$;
    (tmp$ = this.texture) != null ? tmp$.queueTileDraw_b3rrsf$(x, y, this.tcLeft, this.tcTop, this.tcRight, this.tcBottom, this.scale) : null;
  };
  TilesetIndex.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TilesetIndex',
    interfaces: []
  };
  function TilesetIndex_init($this) {
    $this = $this || Object.create(TilesetIndex.prototype);
    TilesetIndex.call($this, null, 0.0, 0.0, 0.0, 0.0, 0.0);
    return $this;
  }
  function TiledMap(dir, url) {
    if (dir === void 0)
      dir = '';
    this.properties = HashMap_init();
    this.data = null;
    this.tileset = null;
    this.tiles = null;
    this.first = true;
    var tmp$;
    var tileDir = dir;
    if (!(tileDir.length === 0) && !endsWith(tileDir, '/')) {
      tileDir = tileDir + '/';
    }
    this.data = JSON.parse(getUrlAsString(tileDir + url));
    var tilesets = this.data.tilesets;
    if (tilesets != null) {
      this.tileset = Kotlin.newArrayF(tilesets.length, TiledMap_init$lambda);
      var maxGid = 0;
      tmp$ = tilesets.length - 1 | 0;
      for (var index = 0; index <= tmp$; index++) {
        this.tileset[index] = tilesets[index].name;
        Textures_getInstance().load_puj7f4$(tilesets[index].name, tileDir + tilesets[index].image);
        maxGid = Math.max(maxGid, tilesets[index].firstgid + tilesets[index].tilecount | 0);
      }
      this.tiles = Kotlin.newArrayF(maxGid, TiledMap_init$lambda_0);
    }
     else {
      this.tileset = Kotlin.newArrayF(0, TiledMap_init$lambda_1);
      this.tiles = Kotlin.newArrayF(0, TiledMap_init$lambda_2);
    }
    this.cacheTiles();
  }
  function TiledMap$cacheTiles$lambda(this$TiledMap) {
    return function () {
      this$TiledMap.cacheTiles();
    };
  }
  TiledMap.prototype.cacheTiles = function () {
    var tmp$, tmp$_0, tmp$_1;
    if (!Textures_getInstance().ready()) {
      window.setTimeout(TiledMap$cacheTiles$lambda(this), 10);
    }
     else {
      var tilesets = this.data.tilesets;
      var tcLeft = 0.0;
      var tcTop = 0.0;
      var tcRight = 0.0;
      var tcBottom = 0.0;
      if (tilesets != null) {
        for (tmp$ = 0; tmp$ !== tilesets.length; ++tmp$) {
          var tileset = tilesets[tmp$];
          var tilesHor = tileset.imagewidth / tileset.tilewidth | 0;
          var tilesVer = tileset.imageheight / tileset.tileheight | 0;
          var scale = tileset.tilewidth / tileset.imagewidth;
          tmp$_0 = tileset.firstgid;
          tmp$_1 = tileset.firstgid + tileset.tilecount | 0;
          for (var index = tmp$_0; index <= tmp$_1; index++) {
            var texture = Textures_getInstance().get_61zpoe$(tileset.name);
            var gid = index - tileset.firstgid | 0;
            var xi = gid % tilesHor;
            var yi = gid / tilesHor | 0;
            yi = tilesVer - yi - 1 | 0;
            var tw = 1.0 / tilesHor;
            var th = 1.0 / tilesVer;
            var pixelW = 0.1 / tileset.tilewidth;
            var pixelH = 0.1 / tileset.tileheight;
            tcLeft = xi * tw;
            tcRight = tcLeft + tw;
            tcBottom = yi * th;
            tcTop = tcBottom + th;
            tcLeft += pixelW;
            tcRight -= pixelW;
            tcBottom += pixelH;
            tcTop -= pixelH;
            this.tiles[index] = new TilesetIndex(texture, tcLeft, tcTop, tcRight, tcBottom, scale);
          }
        }
      }
    }
  };
  TiledMap.prototype.drawTile_nhq4am$ = function (tile, x, y) {
    this.tiles[tile].render_dleff0$(x, y);
  };
  TiledMap.prototype.drawLayer_nhq4am$ = function (layerIndex, xo, yo) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var x = 0.0;
    var y = 0.0;
    tmp$ = this.data.layers;
    if (tmp$ == null) {
      throw new IllegalArgumentException('MapData has no layers (' + this.data + ')');
    }
    var layers = tmp$;
    var layer = layers[layerIndex];
    var layerData = layer.data;
    if (layerData != null) {
      tmp$_0 = get_indices(layerData);
      tmp$_1 = tmp$_0.first;
      tmp$_2 = tmp$_0.last;
      tmp$_3 = tmp$_0.step;
      for (var index = tmp$_1; index <= tmp$_2; index += tmp$_3) {
        this.drawTile_nhq4am$(layerData[index], xo + x * 128.0, yo + y * 128.0);
        if (Kotlin.equals(this.data.renderorder, 'right-down')) {
          x = x + 1;
          if (x >= layer.width) {
            x = 0.0;
            y = y - 1;
          }
        }
         else {
          throw new IllegalStateException('Renderorder ' + this.data.renderorder + ' not supported in ' + this);
        }
      }
    }
    var tilesets = this.data.tilesets;
    if (tilesets != null) {
      for (tmp$_4 = 0; tmp$_4 !== tilesets.length; ++tmp$_4) {
        var tileset = tilesets[tmp$_4];
        if (Textures_getInstance().has_61zpoe$(tileset.name)) {
          var tx = Textures_getInstance().get_61zpoe$(tileset.name);
          tx.render();
        }
      }
    }
    this.first = false;
  };
  function TiledMap_init$lambda(it) {
    return '';
  }
  function TiledMap_init$lambda_0(it) {
    return TilesetIndex_init();
  }
  function TiledMap_init$lambda_1(it) {
    return '';
  }
  function TiledMap_init$lambda_2(it) {
    return TilesetIndex_init();
  }
  TiledMap.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TiledMap',
    interfaces: []
  };
  function DrawMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DrawMode_initFields() {
    DrawMode_initFields = function () {
    };
    DrawMode$LINEAR_instance = new DrawMode('LINEAR', 0);
    DrawMode$NEAREST_instance = new DrawMode('NEAREST', 1);
  }
  var DrawMode$LINEAR_instance;
  function DrawMode$LINEAR_getInstance() {
    DrawMode_initFields();
    return DrawMode$LINEAR_instance;
  }
  var DrawMode$NEAREST_instance;
  function DrawMode$NEAREST_getInstance() {
    DrawMode_initFields();
    return DrawMode$NEAREST_instance;
  }
  DrawMode.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DrawMode',
    interfaces: [Enum]
  };
  function DrawMode$values() {
    return [DrawMode$LINEAR_getInstance(), DrawMode$NEAREST_getInstance()];
  }
  DrawMode.values = DrawMode$values;
  function DrawMode$valueOf(name) {
    switch (name) {
      case 'LINEAR':
        return DrawMode$LINEAR_getInstance();
      case 'NEAREST':
        return DrawMode$NEAREST_getInstance();
      default:Kotlin.throwISE('No enum constant games.perses.game.DrawMode.' + name);
    }
  }
  DrawMode.valueOf_61zpoe$ = DrawMode$valueOf;
  function HTMLElements() {
    this.container = null;
    this.webgl = null;
    this.canvas2d = null;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.container = Kotlin.isType(tmp$ = document.createElement('div'), HTMLElement) ? tmp$ : Kotlin.throwCCE();
    var webGlCanvas = Kotlin.isType(tmp$_0 = document.createElement('canvas'), HTMLCanvasElement) ? tmp$_0 : Kotlin.throwCCE();
    var canvas = Kotlin.isType(tmp$_1 = document.createElement('canvas'), HTMLCanvasElement) ? tmp$_1 : Kotlin.throwCCE();
    this.container.setAttribute('style', 'position: absolute; left: 0px; top: 0px;');
    webGlCanvas.setAttribute('style', 'position: absolute; left: 0px; top: 0px;');
    canvas.setAttribute('style', 'position: absolute; left: 0px; top: 0px; z-index: 10; width: 1000px; height: 500px;');
    ((tmp$_2 = document.body) != null ? tmp$_2 : Kotlin.throwNPE()).appendChild(this.container);
    this.container.appendChild(webGlCanvas);
    this.container.appendChild(canvas);
    var canvas2dcanvas = canvas.getContext('2d');
    var webglcanvas = webGlCanvas.getContext('webgl');
    if (webglcanvas == null) {
      console.log('webgl context not found, trying experimental-webgl.');
      webglcanvas = webGlCanvas.getContext('experimental-webgl');
    }
    if (Kotlin.isType(webglcanvas, WebGLRenderingContext)) {
      this.webgl = webglcanvas;
    }
     else {
      console.log('webgl?', webglcanvas);
      window.alert("Your browser doesn't seem to support webgl!");
      throw new IllegalStateException("Your browser doesn't seem to support webgl!");
    }
    if (Kotlin.isType(canvas2dcanvas, CanvasRenderingContext2D)) {
      this.canvas2d = canvas2dcanvas;
    }
     else {
      console.log('canvas2d?', canvas2dcanvas);
      window.alert("Your browser doesn't seem to support 2d canvas!");
      throw new IllegalStateException("Your browser doesn't seem to support webgl!");
    }
  }
  HTMLElements.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HTMLElements',
    interfaces: []
  };
  function Game() {
    Game_instance = this;
    this.started = false;
    this.view = new View();
    this.html$delegate = lazy(Game$html$lambda);
    this.currentScreen = new DefaultScreen();
    this.start = (new Date()).getTime();
    this.currentTime = this.start;
    this.currentDelta = 0.0;
    this.pause = false;
    this.clearScreenEveryFrame = true;
    this.clearRed = 0.0;
    this.clearGreen = 0.0;
    this.clearBlue = 0.0;
    this.clearAlpha = 1.0;
    this.fps = 0;
    this.fpsCount = 0;
    this.fpsCountTime = 0.0;
    this.borderLeft = 0;
    this.borderTop = 0;
  }
  Object.defineProperty(Game.prototype, 'html', {
    get: function () {
      var $receiver = this.html$delegate;
      new Kotlin.PropertyMetadata('html');
      return $receiver.value;
    }
  });
  Game.prototype.gl = function () {
    return this.html.webgl;
  };
  Game.prototype.resize = function () {
    var canvas = this.gl().canvas;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    if (this.view.lastWindowWidth !== windowWidth || this.view.lastWindowHeight !== windowHeight) {
      this.view.lastWindowWidth = windowWidth;
      this.view.lastWindowHeight = windowHeight;
      this.view.windowWidth = windowWidth;
      this.view.windowHeight = windowHeight;
      this.view.updateView();
      var textCanvas = this.html.canvas2d.canvas;
      canvas.width = this.view.width | 0;
      canvas.height = this.view.height | 0;
      textCanvas.width = this.view.width | 0;
      textCanvas.height = this.view.height | 0;
      this.gl().viewport(0, 0, this.view.width | 0, this.view.height | 0);
      this.borderLeft = (windowWidth - this.view.windowWidth | 0) / 2 | 0;
      this.borderTop = (windowHeight - this.view.windowHeight | 0) / 2 | 0;
      canvas.setAttribute('style', 'position: absolute; left: ' + this.borderLeft + 'px; top: ' + this.borderTop + 'px; z-index: 5; width: ' + this.view.windowWidth + 'px; height: ' + this.view.windowHeight + 'px;');
      textCanvas.setAttribute('style', 'position: absolute; left: ' + this.borderLeft + 'px; top: ' + this.borderTop + 'px; z-index: 10; width: ' + this.view.windowWidth + 'px; height: ' + this.view.windowHeight + 'px;');
    }
  };
  Game.prototype.start_lbnb05$ = function (startScreen) {
    if (this.started) {
      throw new IllegalStateException('You can only start a game once!');
    }
    this.setScreen_lbnb05$(startScreen);
    this.started = true;
    this.gameLoop();
  };
  Game.prototype.setScreen_lbnb05$ = function (screen) {
    this.currentScreen.unloadResources();
    this.currentScreen = screen;
    this.currentScreen.loadResources();
  };
  Game.prototype.setClearColor_7b5o5w$ = function (r, g, b, a) {
    this.clearRed = r;
    this.clearGreen = g;
    this.clearBlue = b;
    this.clearAlpha = a;
  };
  function Game$gameLoop$lambda(this$Game) {
    return function (it) {
      this$Game.gameLoop();
    };
  }
  Game.prototype.gameLoop = function () {
    try {
      if (!Textures_getInstance().ready()) {
        this.gl().clearColor(1.0, 1.0, 1.0, 1.0);
        this.gl().clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
      }
       else {
        this.resize();
        if (!this.pause) {
          this.html.canvas2d.clearRect(0.0, 0.0, this.view.width, this.view.height);
          if (this.clearScreenEveryFrame) {
            this.gl().clearColor(this.clearRed, this.clearGreen, this.clearBlue, this.clearAlpha);
            this.gl().clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
          }
          this.gl().enable(WebGLRenderingContext.BLEND);
          this.gl().blendFunc(WebGLRenderingContext.SRC_ALPHA, WebGLRenderingContext.ONE_MINUS_SRC_ALPHA);
          var time = (new Date()).getTime();
          this.currentDelta = (time - this.currentTime) / 1000.0;
          this.currentTime = time;
          var timeInSeconds = (this.currentTime - this.start) / 1000.0;
          this.fpsCountTime += this.currentDelta;
          this.fpsCount = this.fpsCount + 1 | 0;
          while (this.fpsCountTime > 1.0) {
            this.fps = this.fpsCount;
            this.fpsCountTime -= 1.0;
            this.fpsCount = 0;
          }
          this.currentScreen.update_dleff0$(timeInSeconds, this.currentDelta);
          this.currentScreen.render();
        }
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        console.log(e.message, e);
      }
       else
        throw e;
    }
    window.requestAnimationFrame(Game$gameLoop$lambda(this));
  };
  function Game$html$lambda() {
    return new HTMLElements();
  }
  Game.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Game',
    interfaces: []
  };
  var Game_instance = null;
  function Game_getInstance() {
    if (Game_instance === null) {
      new Game();
    }
    return Game_instance;
  }
  function Screen() {
  }
  Screen.prototype.loadResources = function () {
  };
  Screen.prototype.closeResources = function () {
    this.unloadResources();
  };
  Screen.prototype.unloadResources = function () {
  };
  Screen.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Screen',
    interfaces: []
  };
  function DefaultScreen() {
    Screen.call(this);
  }
  DefaultScreen.prototype.update_dleff0$ = function (time, delta) {
  };
  DefaultScreen.prototype.render = function () {
    Game_getInstance().gl().clearColor(1.0, 1.0, 0.0, 1.0);
    Game_getInstance().gl().clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
  };
  DefaultScreen.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DefaultScreen',
    interfaces: [Screen]
  };
  function ViewType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ViewType_initFields() {
    ViewType_initFields = function () {
    };
    ViewType$PROJECTION_instance = new ViewType('PROJECTION', 0);
    ViewType$WIDTH_instance = new ViewType('WIDTH', 1);
    ViewType$HEIGHT_instance = new ViewType('HEIGHT', 2);
    ViewType$ABSOLUTE_instance = new ViewType('ABSOLUTE', 3);
  }
  var ViewType$PROJECTION_instance;
  function ViewType$PROJECTION_getInstance() {
    ViewType_initFields();
    return ViewType$PROJECTION_instance;
  }
  var ViewType$WIDTH_instance;
  function ViewType$WIDTH_getInstance() {
    ViewType_initFields();
    return ViewType$WIDTH_instance;
  }
  var ViewType$HEIGHT_instance;
  function ViewType$HEIGHT_getInstance() {
    ViewType_initFields();
    return ViewType$HEIGHT_instance;
  }
  var ViewType$ABSOLUTE_instance;
  function ViewType$ABSOLUTE_getInstance() {
    ViewType_initFields();
    return ViewType$ABSOLUTE_instance;
  }
  ViewType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ViewType',
    interfaces: [Enum]
  };
  function ViewType$values() {
    return [ViewType$PROJECTION_getInstance(), ViewType$WIDTH_getInstance(), ViewType$HEIGHT_getInstance(), ViewType$ABSOLUTE_getInstance()];
  }
  ViewType.values = ViewType$values;
  function ViewType$valueOf(name) {
    switch (name) {
      case 'PROJECTION':
        return ViewType$PROJECTION_getInstance();
      case 'WIDTH':
        return ViewType$WIDTH_getInstance();
      case 'HEIGHT':
        return ViewType$HEIGHT_getInstance();
      case 'ABSOLUTE':
        return ViewType$ABSOLUTE_getInstance();
      default:Kotlin.throwISE('No enum constant games.perses.game.ViewType.' + name);
    }
  }
  ViewType.valueOf_61zpoe$ = ViewType$valueOf;
  function View(lastWindowWidth, lastWindowHeight, windowWidth, windowHeight, width, height, angle, near, far, minAspectRatio, maxAspectRatio, leftOffset, bottomOffset, viewType, drawMode) {
    if (lastWindowWidth === void 0)
      lastWindowWidth = 2000;
    if (lastWindowHeight === void 0)
      lastWindowHeight = 1000;
    if (windowWidth === void 0)
      windowWidth = 2000;
    if (windowHeight === void 0)
      windowHeight = 1000;
    if (width === void 0)
      width = 1024.0;
    if (height === void 0)
      height = 1024.0;
    if (angle === void 0)
      angle = 60.0;
    if (near === void 0)
      near = -0.1;
    if (far === void 0)
      far = -100.0;
    if (minAspectRatio === void 0)
      minAspectRatio = 1.0;
    if (maxAspectRatio === void 0)
      maxAspectRatio = 1.0;
    if (leftOffset === void 0)
      leftOffset = 0;
    if (bottomOffset === void 0)
      bottomOffset = 0;
    if (viewType === void 0)
      viewType = ViewType$WIDTH_getInstance();
    if (drawMode === void 0)
      drawMode = DrawMode$LINEAR_getInstance();
    this.lastWindowWidth = lastWindowWidth;
    this.lastWindowHeight = lastWindowHeight;
    this.windowWidth = windowWidth;
    this.windowHeight = windowHeight;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.near = near;
    this.far = far;
    this.minAspectRatio = minAspectRatio;
    this.maxAspectRatio = maxAspectRatio;
    this.leftOffset = leftOffset;
    this.bottomOffset = bottomOffset;
    this.viewType = viewType;
    this.drawMode = drawMode;
    this.vMatrix = new Matrix4();
    this.aspectRatio = 1.0;
    this.updateView();
  }
  View.prototype.requestFullscreen = function () {
    var element = document.body;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
     else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    }
     else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    }
     else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };
  View.prototype.exitFullscreen = function () {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
     else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    }
     else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  };
  View.prototype.switchFullscreen = function () {
    if (this.isFullscreen()) {
      this.exitFullscreen();
    }
     else {
      this.requestFullscreen();
    }
  };
  View.prototype.isFullscreen = function () {
    var fse = document.fullscreenElement || (document.mozFullScreenElement || (document.webkitFullscreenElement || document.msFullscreenElement));
    return fse != undefined;
  };
  View.prototype.updateView = function () {
    var tmp$;
    this.aspectRatio = this.windowWidth / this.windowHeight;
    if (this.aspectRatio < this.minAspectRatio) {
      this.aspectRatio = this.minAspectRatio;
      this.windowHeight = this.windowWidth / this.aspectRatio | 0;
    }
    if (this.aspectRatio > this.maxAspectRatio) {
      this.aspectRatio = this.maxAspectRatio;
      this.windowWidth = this.windowHeight * this.aspectRatio | 0;
    }
    tmp$ = this.viewType;
    if (Kotlin.equals(tmp$, ViewType$ABSOLUTE_getInstance()))
      this.vMatrix.setOrthographicProjection_w8lrqs$(0.0, this.width, 0.0, this.height, this.near, this.far);
    else if (Kotlin.equals(tmp$, ViewType$WIDTH_getInstance())) {
      this.height = this.width / this.aspectRatio;
      this.vMatrix.setOrthographicProjection_w8lrqs$(0.0, this.width, 0.0, this.height, this.near, this.far);
    }
     else if (Kotlin.equals(tmp$, ViewType$HEIGHT_getInstance())) {
      this.width = this.height * this.aspectRatio;
      this.vMatrix.setOrthographicProjection_w8lrqs$(0.0, this.width, 0.0, this.height, this.near, this.far);
    }
     else if (Kotlin.equals(tmp$, ViewType$PROJECTION_getInstance()))
      this.vMatrix.setPerspectiveProjection_7b5o5w$(this.angle, this.aspectRatio, this.near, this.far);
    else {
      throw new IllegalStateException('ViewType ' + this.viewType + ' not implemented!');
    }
  };
  View.prototype.screenToGameCoordX_mx4ult$ = function (screenX) {
    var tmp$;
    var result = screenX;
    tmp$ = this.viewType;
    if (!Kotlin.equals(tmp$, ViewType$ABSOLUTE_getInstance()))
      if (Kotlin.equals(tmp$, ViewType$WIDTH_getInstance()) || Kotlin.equals(tmp$, ViewType$HEIGHT_getInstance()))
        result = (screenX - Game_getInstance().borderLeft) * this.width / this.windowWidth;
      else if (!Kotlin.equals(tmp$, ViewType$PROJECTION_getInstance())) {
        throw new IllegalStateException('ViewType ' + this.viewType + ' not implemented!');
      }
    return result;
  };
  View.prototype.screenToGameCoordY_mx4ult$ = function (screenY) {
    var tmp$;
    var result = screenY;
    tmp$ = this.viewType;
    if (!Kotlin.equals(tmp$, ViewType$ABSOLUTE_getInstance()))
      if (Kotlin.equals(tmp$, ViewType$WIDTH_getInstance()) || Kotlin.equals(tmp$, ViewType$HEIGHT_getInstance()))
        result = this.height - (screenY - Game_getInstance().borderTop) * this.height / this.windowHeight;
      else if (!Kotlin.equals(tmp$, ViewType$PROJECTION_getInstance())) {
        throw new IllegalStateException('ViewType ' + this.viewType + ' not implemented!');
      }
    return result;
  };
  View.prototype.gameToScreenCoordX_mx4ult$ = function (gameX) {
    var tmp$;
    var result = gameX;
    var normalizedX = gameX + this.width / 2;
    tmp$ = this.viewType;
    if (!Kotlin.equals(tmp$, ViewType$ABSOLUTE_getInstance()))
      if (Kotlin.equals(tmp$, ViewType$WIDTH_getInstance()) || Kotlin.equals(tmp$, ViewType$HEIGHT_getInstance()))
        result = gameX / this.width * this.windowWidth + Game_getInstance().borderLeft;
      else if (!Kotlin.equals(tmp$, ViewType$PROJECTION_getInstance())) {
        throw new IllegalStateException('ViewType ' + this.viewType + ' not implemented!');
      }
    return result;
  };
  View.prototype.gameToScreenCoordY_mx4ult$ = function (gameY) {
    var tmp$;
    var result = gameY;
    var normalizedY = gameY + this.height / 2;
    tmp$ = this.viewType;
    if (!Kotlin.equals(tmp$, ViewType$ABSOLUTE_getInstance()))
      if (Kotlin.equals(tmp$, ViewType$WIDTH_getInstance()) || Kotlin.equals(tmp$, ViewType$HEIGHT_getInstance()))
        result = this.height - gameY / this.height * this.windowHeight + Game_getInstance().borderTop;
      else if (!Kotlin.equals(tmp$, ViewType$PROJECTION_getInstance())) {
        throw new IllegalStateException('ViewType ' + this.viewType + ' not implemented!');
      }
    return result;
  };
  View.prototype.setToWidth_mx4ult$ = function (width) {
    this.width = width;
    this.viewType = ViewType$WIDTH_getInstance();
    this.updateView();
  };
  View.prototype.setToHeight_mx4ult$ = function (height) {
    this.height = height;
    this.viewType = ViewType$HEIGHT_getInstance();
    this.updateView();
  };
  View.prototype.setProjection_mx4ult$ = function (angle) {
    this.angle = angle;
    this.viewType = ViewType$PROJECTION_getInstance();
    this.updateView();
  };
  View.prototype.setNear_mx4ult$ = function (near) {
    this.near = near;
    this.updateView();
  };
  View.prototype.setFar_mx4ult$ = function (far) {
    this.far = far;
    this.updateView();
  };
  View.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'View',
    interfaces: []
  };
  function Color() {
    Color_instance = this;
  }
  Color.prototype.hslToRgb_y2kzbl$ = function (h, s, l) {
    var r;
    var g;
    var b;
    if (s === 0.0) {
      b = l;
      g = b;
      r = g;
    }
     else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = this.hueToRgb_y2kzbl$(p, q, h + 1.0 / 3.0);
      g = this.hueToRgb_y2kzbl$(p, q, h);
      b = this.hueToRgb_y2kzbl$(p, q, h - 1.0 / 3.0);
    }
    var rgb = [r * 255 | 0, g * 255 | 0, b * 255 | 0];
    return rgb;
  };
  Color.prototype.hueToRgb_y2kzbl$ = function (p, q, t) {
    var lt = t;
    if (lt < 0.0) {
      lt += 1.0;
    }
    if (lt > 1.0) {
      lt -= 1.0;
    }
    if (lt < 1.0 / 6.0) {
      return p + (q - p) * 6.0 * lt;
    }
    if (lt < 1.0 / 2.0) {
      return q;
    }
    if (lt < 2.0 / 3.0) {
      return p + (q - p) * (2.0 / 3.0 - lt) * 6.0;
    }
    return p;
  };
  Color.prototype.rgbToHsl_qt1dr2$ = function (pR, pG, pB) {
    var r = pR / 255.0;
    var g = pG / 255.0;
    var b = pB / 255.0;
    var max = r > g && r > b ? r : g > b ? g : b;
    var min = r < g && r < b ? r : g < b ? g : b;
    var h;
    var s;
    var l;
    l = (max + min) / 2.0;
    if (max === min) {
      s = 0.0;
      h = s;
    }
     else {
      var d = max - min;
      s = l > 0.5 ? d / (2.0 - max - min) : d / (max + min);
      if (r > g && r > b)
        h = (g - b) / d + (g < b ? 6.0 : 0.0);
      else if (g > b)
        h = (b - r) / d + 2.0;
      else
        h = (r - g) / d + 4.0;
      h /= 6.0;
    }
    var hsl = [h, s, l];
    return hsl;
  };
  Color.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Color',
    interfaces: []
  };
  var Color_instance = null;
  function Color_getInstance() {
    if (Color_instance === null) {
      new Color();
    }
    return Color_instance;
  }
  function KeyCode(name, ordinal, keyCode) {
    Enum.call(this);
    this.keyCode = keyCode;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function KeyCode_initFields() {
    KeyCode_initFields = function () {
    };
    KeyCode$LEFT_instance = new KeyCode('LEFT', 0, 37);
    KeyCode$UP_instance = new KeyCode('UP', 1, 38);
    KeyCode$DOWN_instance = new KeyCode('DOWN', 2, 40);
    KeyCode$RIGHT_instance = new KeyCode('RIGHT', 3, 39);
    KeyCode$SPACE_instance = new KeyCode('SPACE', 4, 32);
    KeyCode$MINUS_instance = new KeyCode('MINUS', 5, 109);
    KeyCode$PLUS_instance = new KeyCode('PLUS', 6, 107);
  }
  var KeyCode$LEFT_instance;
  function KeyCode$LEFT_getInstance() {
    KeyCode_initFields();
    return KeyCode$LEFT_instance;
  }
  var KeyCode$UP_instance;
  function KeyCode$UP_getInstance() {
    KeyCode_initFields();
    return KeyCode$UP_instance;
  }
  var KeyCode$DOWN_instance;
  function KeyCode$DOWN_getInstance() {
    KeyCode_initFields();
    return KeyCode$DOWN_instance;
  }
  var KeyCode$RIGHT_instance;
  function KeyCode$RIGHT_getInstance() {
    KeyCode_initFields();
    return KeyCode$RIGHT_instance;
  }
  var KeyCode$SPACE_instance;
  function KeyCode$SPACE_getInstance() {
    KeyCode_initFields();
    return KeyCode$SPACE_instance;
  }
  var KeyCode$MINUS_instance;
  function KeyCode$MINUS_getInstance() {
    KeyCode_initFields();
    return KeyCode$MINUS_instance;
  }
  var KeyCode$PLUS_instance;
  function KeyCode$PLUS_getInstance() {
    KeyCode_initFields();
    return KeyCode$PLUS_instance;
  }
  KeyCode.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'KeyCode',
    interfaces: [Enum]
  };
  function KeyCode$values() {
    return [KeyCode$LEFT_getInstance(), KeyCode$UP_getInstance(), KeyCode$DOWN_getInstance(), KeyCode$RIGHT_getInstance(), KeyCode$SPACE_getInstance(), KeyCode$MINUS_getInstance(), KeyCode$PLUS_getInstance()];
  }
  KeyCode.values = KeyCode$values;
  function KeyCode$valueOf(name) {
    switch (name) {
      case 'LEFT':
        return KeyCode$LEFT_getInstance();
      case 'UP':
        return KeyCode$UP_getInstance();
      case 'DOWN':
        return KeyCode$DOWN_getInstance();
      case 'RIGHT':
        return KeyCode$RIGHT_getInstance();
      case 'SPACE':
        return KeyCode$SPACE_getInstance();
      case 'MINUS':
        return KeyCode$MINUS_getInstance();
      case 'PLUS':
        return KeyCode$PLUS_getInstance();
      default:Kotlin.throwISE('No enum constant games.perses.input.KeyCode.' + name);
    }
  }
  KeyCode.valueOf_61zpoe$ = KeyCode$valueOf;
  function InputProcessor() {
  }
  InputProcessor.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'InputProcessor',
    interfaces: []
  };
  function EmptyInputProcessor() {
  }
  EmptyInputProcessor.prototype.pointerClick_nhq4am$ = function (pointer, x, y) {
  };
  EmptyInputProcessor.prototype.keyDown_za3lpa$ = function (keyCode) {
  };
  EmptyInputProcessor.prototype.keyPressed_za3lpa$ = function (charCode) {
  };
  EmptyInputProcessor.prototype.keyUp_za3lpa$ = function (keyCode) {
  };
  EmptyInputProcessor.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'EmptyInputProcessor',
    interfaces: [InputProcessor]
  };
  function Keys() {
    Keys_instance = this;
    this.keys_0 = HashMap_init();
    this.inputProcesser_0 = new EmptyInputProcessor();
    var body = document.body;
    if (body != null) {
      body.onkeydown = Keys_init$lambda(this);
      body.onkeyup = Keys_init$lambda_0(this);
      body.onkeypress = Keys_init$lambda_1(this);
      body.onclick = Keys_init$lambda_2(this);
      body.onmousedown = Keys_init$lambda_3(this);
      body.onmouseup = Keys_init$lambda_4(this);
      body.onmousemove = Keys_init$lambda_5(this);
    }
     else {
      console.log("Can't register key events, document.body is null!?");
    }
  }
  Keys.prototype.setInputProcessor_809zsn$ = function (processor) {
    this.inputProcesser_0 = processor;
  };
  Keys.prototype.keyDown_0 = function (key) {
    if (Kotlin.isType(key, KeyboardEvent)) {
      this.keys_0.put_xwzc9p$(key.keyCode, (new Date()).getTime());
      this.inputProcesser_0.keyDown_za3lpa$(key.keyCode);
    }
  };
  Keys.prototype.keyUp_0 = function (key) {
    if (Kotlin.isType(key, KeyboardEvent)) {
      this.inputProcesser_0.keyUp_za3lpa$(key.keyCode);
      this.keys_0.remove_11rb$(key.keyCode);
    }
  };
  Keys.prototype.keyPress_0 = function (key) {
    if (Kotlin.isType(key, KeyboardEvent)) {
      this.inputProcesser_0.keyPressed_za3lpa$(key.charCode);
    }
  };
  Keys.prototype.mouseClick_0 = function (event) {
    if (Kotlin.isType(event, MouseEvent)) {
      var vx = Game_getInstance().view.screenToGameCoordX_mx4ult$(getX(event, Game_getInstance().html.container));
      var vy = Game_getInstance().view.screenToGameCoordY_mx4ult$(getY(event, Game_getInstance().html.container));
      this.inputProcesser_0.pointerClick_nhq4am$(event.button, vx, vy);
    }
  };
  Keys.prototype.mouseMove_0 = function (event) {
    if (Kotlin.isType(event, MouseEvent)) {
      var vx = Game_getInstance().view.screenToGameCoordX_mx4ult$(getX(event, Game_getInstance().html.container));
      var vy = Game_getInstance().view.screenToGameCoordY_mx4ult$(getY(event, Game_getInstance().html.container));
    }
  };
  Keys.prototype.isDown_za3lpa$ = function (keyCode) {
    return this.keys_0.containsKey_11rb$(keyCode);
  };
  Keys.prototype.isDown_igopyj$ = function (keyCode) {
    return this.keys_0.containsKey_11rb$(keyCode.keyCode);
  };
  Keys.prototype.wasPressed_5wr77w$ = function (keyCode, delta) {
    var time = this.keys_0.get_11rb$(keyCode);
    return time != null && time > (new Date()).getTime() - delta;
  };
  function Keys_init$lambda(this$Keys) {
    return function (it) {
      this$Keys.keyDown_0(it);
    };
  }
  function Keys_init$lambda_0(this$Keys) {
    return function (it) {
      this$Keys.keyUp_0(it);
    };
  }
  function Keys_init$lambda_1(this$Keys) {
    return function (it) {
      this$Keys.keyPress_0(it);
    };
  }
  function Keys_init$lambda_2(this$Keys) {
    return function (it) {
      this$Keys.mouseClick_0(it);
    };
  }
  function Keys_init$lambda_3(this$Keys) {
    return function (it) {
      this$Keys.mouseMove_0(it);
    };
  }
  function Keys_init$lambda_4(this$Keys) {
    return function (it) {
      this$Keys.mouseMove_0(it);
    };
  }
  function Keys_init$lambda_5(this$Keys) {
    return function (it) {
      this$Keys.mouseMove_0(it);
    };
  }
  Keys.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Keys',
    interfaces: []
  };
  var Keys_instance = null;
  function Keys_getInstance() {
    if (Keys_instance === null) {
      new Keys();
    }
    return Keys_instance;
  }
  function getX($receiver, element) {
    return $receiver.pageX - element.getBoundingClientRect().left;
  }
  function getY($receiver, element) {
    return $receiver.pageY - element.getBoundingClientRect().top;
  }
  function ShaderProgram(webgl, drawType, vertexShaderSource_0, fragmentShaderSource_0, vainfo, setter) {
    this.webgl = webgl;
    this.drawType = drawType;
    this.vainfo = vainfo;
    this.setter = setter;
    this.shaderProgram = null;
    this.vertex = null;
    this.fragment = null;
    this.verticesBlockSize = 0;
    this.drawLength = 0;
    var tmp$, tmp$_0;
    this.vertex = this.compileShader_0(vertexShaderSource_0, WebGLRenderingContext.VERTEX_SHADER);
    this.fragment = this.compileShader_0(fragmentShaderSource_0, WebGLRenderingContext.FRAGMENT_SHADER);
    tmp$ = this.webgl.createProgram();
    if (tmp$ == null) {
      throw new IllegalStateException('Unable to request shader program from webgl context!');
    }
    this.shaderProgram = tmp$;
    this.webgl.attachShader(this.shaderProgram, this.vertex);
    this.webgl.attachShader(this.shaderProgram, this.fragment);
    this.webgl.linkProgram(this.shaderProgram);
    if (Kotlin.equals(this.webgl.getProgramParameter(this.shaderProgram, WebGLRenderingContext.LINK_STATUS), false)) {
      throw new IllegalStateException('Unable to compile shader program!');
    }
    this.webgl.useProgram(this.shaderProgram);
    this.verticesBlockSize = 0;
    tmp$_0 = Kotlin.arrayIterator(this.vainfo);
    while (tmp$_0.hasNext()) {
      var info = tmp$_0.next();
      info.location = this.webgl.getAttribLocation(this.shaderProgram, info.locationName);
      info.offset = this.verticesBlockSize;
      this.verticesBlockSize = this.verticesBlockSize + info.numElements | 0;
    }
    if (this.drawType === WebGLRenderingContext.TRIANGLES)
      this.drawLength = this.verticesBlockSize * 3 | 0;
    else {
      this.drawLength = this.verticesBlockSize;
    }
  }
  ShaderProgram.prototype.compileShader_0 = function (source, type) {
    var tmp$;
    tmp$ = this.webgl.createShader(type);
    if (tmp$ == null) {
      throw new IllegalStateException('Unable to request shader from webgl context!');
    }
    var result = tmp$;
    this.webgl.shaderSource(result, source);
    this.webgl.compileShader(result);
    if (Kotlin.equals(this.webgl.getShaderParameter(result, WebGLRenderingContext.COMPILE_STATUS), false)) {
      throw new IllegalStateException('Unable to compile shader!' + '\n' + source + '\n' + '\n' + Kotlin.toString(this.webgl.getShaderInfoLog(result)));
    }
    return result;
  };
  ShaderProgram.prototype.begin_v6ru81$ = function (attribBuffer, userdata) {
    var tmp$;
    this.webgl.useProgram(this.shaderProgram);
    this.webgl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, attribBuffer);
    tmp$ = Kotlin.arrayIterator(this.vainfo);
    while (tmp$.hasNext()) {
      var info = tmp$.next();
      this.webgl.enableVertexAttribArray(info.location);
      this.webgl.vertexAttribPointer(info.location, info.numElements, WebGLRenderingContext.FLOAT, false, this.verticesBlockSize * 4 | 0, info.offset * 4 | 0);
    }
    this.setter(this, userdata);
  };
  ShaderProgram.prototype.end = function () {
    var tmp$;
    tmp$ = Kotlin.arrayIterator(this.vainfo);
    while (tmp$.hasNext()) {
      var info = tmp$.next();
      this.webgl.disableVertexAttribArray(info.location);
    }
    this.webgl.useProgram(null);
  };
  ShaderProgram.prototype.getAttribLocation_61zpoe$ = function (location) {
    return this.webgl.getAttribLocation(this.shaderProgram, location);
  };
  ShaderProgram.prototype.getUniformLocation_61zpoe$ = function (location) {
    return this.webgl.getUniformLocation(this.shaderProgram, location);
  };
  ShaderProgram.prototype.setUniform1f_9sobi5$ = function (location, value) {
    this.webgl.uniform1f(this.getUniformLocation_61zpoe$(location), value);
  };
  ShaderProgram.prototype.setUniform4f_kjn4ou$ = function (location, v1, v2, v3, v4) {
    this.webgl.uniform4f(this.getUniformLocation_61zpoe$(location), v1, v2, v3, v4);
  };
  ShaderProgram.prototype.setUniform1i_bm4lxs$ = function (location, value) {
    this.webgl.uniform1i(this.getUniformLocation_61zpoe$(location), value);
  };
  ShaderProgram.prototype.setUniformMatrix4fv_pphpxd$ = function (location, value) {
    this.webgl.uniformMatrix4fv(this.getUniformLocation_61zpoe$(location), false, value);
  };
  ShaderProgram.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ShaderProgram',
    interfaces: []
  };
  function VertextAttributeInfo(locationName, numElements) {
    this.locationName = locationName;
    this.numElements = numElements;
    this.location = 0;
    this.offset = 0;
  }
  VertextAttributeInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'VertextAttributeInfo',
    interfaces: []
  };
  function ShaderProgramMesh(shaderProgram) {
    this.shaderProgram = shaderProgram;
    this.webgl = this.shaderProgram.webgl;
    this.data = new Float32Array(20000 - 20000 % this.shaderProgram.drawLength | 0);
    this.currentIndex = 0;
    this.attribBuffer = null;
    this.counter = 0;
    var tmp$;
    tmp$ = this.webgl.createBuffer();
    if (tmp$ == null) {
      throw new IllegalStateException('Unable to create webgl buffer!');
    }
    this.attribBuffer = tmp$;
    this.webgl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.attribBuffer);
  }
  ShaderProgramMesh.prototype.queue_8cqhcw$ = function (vertices) {
    var tmp$;
    this.queueArray_o5v4nz$(Array.isArray(tmp$ = vertices) ? tmp$ : Kotlin.throwCCE());
  };
  ShaderProgramMesh.prototype.queueArray_o5v4nz$ = function (vertices) {
    this.data.set(vertices, this.currentIndex);
    this.currentIndex = this.currentIndex + vertices.length | 0;
    if (this.bufferFull()) {
      this.currentIndex = 0;
    }
  };
  ShaderProgramMesh.prototype.remaining = function () {
    return this.data.length - this.currentIndex | 0;
  };
  ShaderProgramMesh.prototype.bufferFull = function () {
    return this.currentIndex === this.data.length;
  };
  ShaderProgramMesh.prototype.render_11rb$ = function (userdata) {
    this.counter = this.counter + 1 | 0;
    if (this.currentIndex > 0) {
      if (this.currentIndex % this.shaderProgram.verticesBlockSize !== 0) {
        throw new IllegalStateException('Number of vertices not a multiple of the attribute block size!');
      }
      this.shaderProgram.begin_v6ru81$(this.attribBuffer, userdata);
      this.webgl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, this.data, WebGLRenderingContext.DYNAMIC_DRAW);
      this.webgl.drawArrays(this.shaderProgram.drawType, 0, this.currentIndex / this.shaderProgram.verticesBlockSize | 0);
      this.currentIndex = 0;
      this.shaderProgram.end();
    }
  };
  ShaderProgramMesh.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ShaderProgramMesh',
    interfaces: []
  };
  function Matrix4() {
    this.matrix_0 = [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0];
    this.temp_0 = Kotlin.newArray(16, 0);
    this.translateMatrix_0 = [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0];
    this.scaleMatrix_0 = [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0];
    this.rotateXMatrix_0 = [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0];
    this.rotateYMatrix_0 = [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0];
    this.rotateZMatrix_0 = [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0];
  }
  Matrix4.prototype.get = function () {
    return this.matrix_0;
  };
  Matrix4.prototype.getFloat32Array = function () {
    return new Float32Array(toTypedArray(this.get()));
  };
  Matrix4.prototype.set_q3cr5i$ = function (values) {
    if (values.length !== 16) {
      throw new IllegalArgumentException('Matrix size should be 16!');
    }
    this.matrix_0 = values;
  };
  Matrix4.prototype.setPerspectiveProjection_7b5o5w$ = function (angle, imageAspectRatio, near, far) {
    var r = angle / 180.0 * Math.PI;
    var f = 1.0 / Math.tan(r / 2.0);
    this.matrix_0[0] = f / imageAspectRatio;
    this.matrix_0[1] = 0.0;
    this.matrix_0[2] = 0.0;
    this.matrix_0[3] = 0.0;
    this.matrix_0[4] = 0.0;
    this.matrix_0[5] = f;
    this.matrix_0[6] = 0.0;
    this.matrix_0[7] = 0.0;
    this.matrix_0[8] = 0.0;
    this.matrix_0[9] = 0.0;
    this.matrix_0[10] = -(far + near) / (far - near);
    this.matrix_0[11] = -1.0;
    this.matrix_0[12] = 0.0;
    this.matrix_0[13] = 0.0;
    this.matrix_0[14] = -(2.0 * far * near) / (far - near);
    this.matrix_0[15] = 0.0;
  };
  Matrix4.prototype.setOrthographicProjection_w8lrqs$ = function (left, right, bottom, top, near, far) {
    this.matrix_0[0] = 2.0 / (right - left);
    this.matrix_0[1] = 0.0;
    this.matrix_0[2] = 0.0;
    this.matrix_0[3] = 0.0;
    this.matrix_0[4] = 0.0;
    this.matrix_0[5] = 2.0 / (top - bottom);
    this.matrix_0[6] = 0.0;
    this.matrix_0[7] = 0.0;
    this.matrix_0[8] = 0.0;
    this.matrix_0[9] = 0.0;
    this.matrix_0[10] = -2.0 / (far - near);
    this.matrix_0[11] = 0.0;
    this.matrix_0[12] = -(right + left) / (right - left);
    this.matrix_0[13] = -(top + bottom) / (top - bottom);
    this.matrix_0[14] = -(far + near) / (far - near);
    this.matrix_0[15] = 1.0;
  };
  Matrix4.prototype.setToIdentity = function () {
    this.matrix_0[0] = 1.0;
    this.matrix_0[1] = 0.0;
    this.matrix_0[2] = 0.0;
    this.matrix_0[3] = 0.0;
    this.matrix_0[4] = 0.0;
    this.matrix_0[5] = 1.0;
    this.matrix_0[6] = 0.0;
    this.matrix_0[7] = 0.0;
    this.matrix_0[8] = 0.0;
    this.matrix_0[9] = 0.0;
    this.matrix_0[10] = 1.0;
    this.matrix_0[11] = 0.0;
    this.matrix_0[12] = 0.0;
    this.matrix_0[13] = 0.0;
    this.matrix_0[14] = 0.0;
    this.matrix_0[15] = 1.0;
  };
  Matrix4.prototype.mul_2qxizu$ = function (other) {
    this.mul_0(other.get());
  };
  Matrix4.prototype.mul_0 = function (other) {
    if (other.length !== 16) {
      throw new IllegalArgumentException('Matrix size should be 16!');
    }
    this.temp_0[0] = this.matrix_0[0] * other[0] + this.matrix_0[1] * other[4] + this.matrix_0[2] * other[8] + this.matrix_0[3] * other[12];
    this.temp_0[1] = this.matrix_0[0] * other[1] + this.matrix_0[1] * other[5] + this.matrix_0[2] * other[9] + this.matrix_0[3] * other[13];
    this.temp_0[2] = this.matrix_0[0] * other[2] + this.matrix_0[1] * other[6] + this.matrix_0[2] * other[10] + this.matrix_0[3] * other[14];
    this.temp_0[3] = this.matrix_0[0] * other[3] + this.matrix_0[1] * other[7] + this.matrix_0[2] * other[11] + this.matrix_0[3] * other[15];
    this.temp_0[4] = this.matrix_0[4] * other[0] + this.matrix_0[5] * other[4] + this.matrix_0[6] * other[8] + this.matrix_0[7] * other[12];
    this.temp_0[5] = this.matrix_0[4] * other[1] + this.matrix_0[5] * other[5] + this.matrix_0[6] * other[9] + this.matrix_0[7] * other[13];
    this.temp_0[6] = this.matrix_0[4] * other[2] + this.matrix_0[5] * other[6] + this.matrix_0[6] * other[10] + this.matrix_0[7] * other[14];
    this.temp_0[7] = this.matrix_0[4] * other[3] + this.matrix_0[5] * other[7] + this.matrix_0[6] * other[11] + this.matrix_0[7] * other[15];
    this.temp_0[8] = this.matrix_0[8] * other[0] + this.matrix_0[9] * other[4] + this.matrix_0[10] * other[8] + this.matrix_0[11] * other[12];
    this.temp_0[9] = this.matrix_0[8] * other[1] + this.matrix_0[9] * other[5] + this.matrix_0[10] * other[9] + this.matrix_0[11] * other[13];
    this.temp_0[10] = this.matrix_0[8] * other[2] + this.matrix_0[9] * other[6] + this.matrix_0[10] * other[10] + this.matrix_0[11] * other[14];
    this.temp_0[11] = this.matrix_0[8] * other[3] + this.matrix_0[9] * other[7] + this.matrix_0[10] * other[11] + this.matrix_0[11] * other[15];
    this.temp_0[12] = this.matrix_0[12] * other[0] + this.matrix_0[13] * other[4] + this.matrix_0[14] * other[8] + this.matrix_0[15] * other[12];
    this.temp_0[13] = this.matrix_0[12] * other[1] + this.matrix_0[13] * other[5] + this.matrix_0[14] * other[9] + this.matrix_0[15] * other[13];
    this.temp_0[14] = this.matrix_0[12] * other[2] + this.matrix_0[13] * other[6] + this.matrix_0[14] * other[10] + this.matrix_0[15] * other[14];
    this.temp_0[15] = this.matrix_0[12] * other[3] + this.matrix_0[13] * other[7] + this.matrix_0[14] * other[11] + this.matrix_0[15] * other[15];
    this.matrix_0[0] = this.temp_0[0];
    this.matrix_0[1] = this.temp_0[1];
    this.matrix_0[2] = this.temp_0[2];
    this.matrix_0[3] = this.temp_0[3];
    this.matrix_0[4] = this.temp_0[4];
    this.matrix_0[5] = this.temp_0[5];
    this.matrix_0[6] = this.temp_0[6];
    this.matrix_0[7] = this.temp_0[7];
    this.matrix_0[8] = this.temp_0[8];
    this.matrix_0[9] = this.temp_0[9];
    this.matrix_0[10] = this.temp_0[10];
    this.matrix_0[11] = this.temp_0[11];
    this.matrix_0[12] = this.temp_0[12];
    this.matrix_0[13] = this.temp_0[13];
    this.matrix_0[14] = this.temp_0[14];
    this.matrix_0[15] = this.temp_0[15];
  };
  Matrix4.prototype.translate_y2kzbl$ = function (x, y, z) {
    this.translateMatrix_0[12] = x;
    this.translateMatrix_0[13] = y;
    this.translateMatrix_0[14] = z;
    this.mul_0(this.translateMatrix_0);
  };
  Matrix4.prototype.scale_y2kzbl$ = function (x, y, z) {
    this.scaleMatrix_0[0] = x;
    this.scaleMatrix_0[5] = y;
    this.scaleMatrix_0[10] = z;
    this.mul_0(this.scaleMatrix_0);
  };
  Matrix4.prototype.rotateX_mx4ult$ = function (angle) {
    this.rotateXMatrix_0[5] = Math.cos(angle);
    this.rotateXMatrix_0[6] = -Math.sin(angle);
    this.rotateXMatrix_0[9] = Math.sin(angle);
    this.rotateXMatrix_0[10] = Math.cos(angle);
    this.mul_0(this.rotateXMatrix_0);
  };
  Matrix4.prototype.rotateY_mx4ult$ = function (angle) {
    this.rotateYMatrix_0[0] = Math.cos(angle);
    this.rotateYMatrix_0[2] = Math.sin(angle);
    this.rotateYMatrix_0[8] = -Math.sin(angle);
    this.rotateYMatrix_0[10] = Math.cos(angle);
    this.mul_0(this.rotateYMatrix_0);
  };
  Matrix4.prototype.rotateZ_mx4ult$ = function (angle) {
    this.rotateZMatrix_0[0] = Math.cos(angle);
    this.rotateZMatrix_0[1] = Math.sin(angle);
    this.rotateZMatrix_0[4] = -Math.sin(angle);
    this.rotateZMatrix_0[5] = Math.cos(angle);
    this.mul_0(this.rotateZMatrix_0);
  };
  Matrix4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Matrix4',
    interfaces: []
  };
  function Sound(name, url, defaultVolume, numberOfChannels) {
    if (defaultVolume === void 0)
      defaultVolume = 0.75;
    this.name = name;
    this.url = url;
    this.defaultVolume = defaultVolume;
    this.numberOfChannels = numberOfChannels;
    this.channels = null;
    this.nextChannel = 0;
    var tmp$, tmp$_0;
    this.channels = Kotlin.newArrayF(this.numberOfChannels, Sound_init$lambda);
    tmp$ = this.channels;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var audio = tmp$[tmp$_0];
      if (audio != null) {
        audio.src = this.url;
        audio.pause();
        audio.load();
        audio.volume = this.defaultVolume;
      }
    }
  }
  Sound.prototype.play_14dthe$ = function (volume) {
    if (volume === void 0)
      volume = this.defaultVolume;
    var tmp$, tmp$_0, tmp$_1;
    (tmp$ = this.channels[this.nextChannel]) != null ? (tmp$.volume = volume) : null;
    (tmp$_0 = this.channels[this.nextChannel]) != null ? (tmp$_0.currentTime = 0.0) : null;
    (tmp$_1 = this.channels[this.nextChannel]) != null ? tmp$_1.play() : null;
    this.nextChannel = (this.nextChannel + 1 | 0) % this.channels.length;
  };
  Sound.prototype.pause = function () {
    var tmp$, tmp$_0;
    tmp$ = this.channels;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var audio = tmp$[tmp$_0];
      audio != null ? audio.pause() : null;
    }
  };
  function Sound_init$lambda(it) {
    var tmp$;
    return Kotlin.isType(tmp$ = document.createElement('audio'), HTMLAudioElement) ? tmp$ : Kotlin.throwCCE();
  }
  Sound.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Sound',
    interfaces: []
  };
  function Sounds() {
    Sounds_instance = this;
    this.sounds = HashMap_init();
  }
  Sounds.prototype.load_5myiwc$ = function (name, url, volume, channels) {
    if (volume === void 0)
      volume = 0.75;
    if (channels === void 0)
      channels = 1;
    this.sounds.put_xwzc9p$(name, new Sound(name, url, volume, channels));
  };
  Sounds.prototype.play_ajzga7$ = function (name, volume) {
    if (volume === void 0)
      volume = null;
    var tmp$;
    tmp$ = this.sounds.get_11rb$(name);
    if (tmp$ == null) {
      throw new IllegalArgumentException("Sound '" + name + "' not found, load it first!");
    }
    var sound = tmp$;
    if (volume != null) {
      sound.play_14dthe$(volume);
    }
     else {
      sound.play_14dthe$();
    }
  };
  Sounds.prototype.pause_61zpoe$ = function (name) {
    var tmp$;
    tmp$ = this.sounds.get_11rb$(name);
    if (tmp$ == null) {
      throw new IllegalArgumentException("Sound '" + name + "' not found, load it first!");
    }
    var sound = tmp$;
    sound.pause();
  };
  Sounds.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Sounds',
    interfaces: []
  };
  var Sounds_instance = null;
  function Sounds_getInstance() {
    if (Sounds_instance === null) {
      new Sounds();
    }
    return Sounds_instance;
  }
  function Music() {
    Music_instance = this;
    this.playing = HashSet_init();
  }
  Music.prototype.load_61zpoe$ = function (url) {
    var tmp$;
    var audio = Kotlin.isType(tmp$ = document.createElement('audio'), HTMLAudioElement) ? tmp$ : Kotlin.throwCCE();
    audio.src = url;
    return audio;
  };
  function Music$play$lambda(closure$looping, closure$audio, this$Music) {
    return function (it) {
      if (closure$looping) {
        closure$audio.currentTime = 0.0;
        return closure$audio.play();
      }
       else {
        closure$audio.remove();
        return this$Music.playing.remove_11rb$(closure$audio);
      }
    };
  }
  Music.prototype.play_1truf$ = function (url, volume, looping) {
    if (volume === void 0)
      volume = 0.75;
    if (looping === void 0)
      looping = false;
    var tmp$;
    var audio = Kotlin.isType(tmp$ = document.createElement('audio'), HTMLAudioElement) ? tmp$ : Kotlin.throwCCE();
    audio.src = url;
    audio.volume = volume;
    audio.play();
    audio.onended = Music$play$lambda(looping, audio, this);
    return audio;
  };
  Music.prototype.stopAll = function () {
  };
  Music.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Music',
    interfaces: []
  };
  var Music_instance = null;
  function Music_getInstance() {
    if (Music_instance === null) {
      new Music();
    }
    return Music_instance;
  }
  function Texts() {
    Texts_instance = this;
  }
  Texts.prototype.drawText_k35s1u$ = function (x, y, message, font, fillStyle) {
    if (font === void 0)
      font = 'bold 24pt Arial';
    if (fillStyle === void 0)
      fillStyle = 'white';
    var yy = y;
    var xx = x;
    if (yy < 0) {
      yy += Game_getInstance().view.height;
    }
    if (xx < 0) {
      xx += Game_getInstance().view.width;
    }
    yy = Game_getInstance().view.height - yy;
    Game_getInstance().html.canvas2d.fillStyle = fillStyle;
    Game_getInstance().html.canvas2d.font = font;
    Game_getInstance().html.canvas2d.fillText(message, x, yy);
  };
  Texts.prototype.drawLeftTop_k35s1u$ = function (left, top, message, font, fillStyle) {
    if (font === void 0)
      font = 'bold 24pt Arial';
    if (fillStyle === void 0)
      fillStyle = 'white';
    this.drawText_k35s1u$(Game_getInstance().view.gameToScreenCoordX_mx4ult$(-Game_getInstance().view.width / 2.0 + left), Game_getInstance().view.gameToScreenCoordY_mx4ult$(Game_getInstance().view.height / 2.0 - top), message, font, fillStyle);
  };
  Texts.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Texts',
    interfaces: []
  };
  var Texts_instance = null;
  function Texts_getInstance() {
    if (Texts_instance === null) {
      new Texts();
    }
    return Texts_instance;
  }
  function getUrlAsString(url) {
    var req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send(null);
    return req.responseText;
  }
  var package$games = _.games || (_.games = {});
  var package$perses = package$games.perses || (package$games.perses = {});
  var package$sprite = package$perses.sprite || (package$perses.sprite = {});
  package$sprite.Sprite = Sprite;
  package$sprite.SpriteBatch = SpriteBatch;
  var package$texture = package$perses.texture || (package$perses.texture = {});
  package$texture.TextureData = TextureData;
  package$texture.Texture = Texture;
  package$texture.Rect = Rect;
  package$texture.Size = Size;
  package$texture.Pivot = Pivot;
  package$texture.SpriteSheetData = SpriteSheetData;
  package$texture.SpriteSheet = SpriteSheet;
  Object.defineProperty(package$texture, 'Textures', {
    get: Textures_getInstance
  });
  var package$map = package$perses.map || (package$perses.map = {});
  package$map.Map = Map;
  var package$tiled = package$map.tiled || (package$map.tiled = {});
  package$tiled.MapData = MapData;
  package$tiled.MapLayer = MapLayer;
  package$tiled.MapTileset = MapTileset;
  package$tiled.TilesetIndex_init = TilesetIndex_init;
  package$tiled.TilesetIndex = TilesetIndex;
  package$tiled.TiledMap = TiledMap;
  Object.defineProperty(DrawMode, 'LINEAR', {
    get: DrawMode$LINEAR_getInstance
  });
  Object.defineProperty(DrawMode, 'NEAREST', {
    get: DrawMode$NEAREST_getInstance
  });
  var package$game = package$perses.game || (package$perses.game = {});
  package$game.DrawMode = DrawMode;
  package$game.HTMLElements = HTMLElements;
  Object.defineProperty(package$game, 'Game', {
    get: Game_getInstance
  });
  package$game.Screen = Screen;
  package$game.DefaultScreen = DefaultScreen;
  Object.defineProperty(ViewType, 'PROJECTION', {
    get: ViewType$PROJECTION_getInstance
  });
  Object.defineProperty(ViewType, 'WIDTH', {
    get: ViewType$WIDTH_getInstance
  });
  Object.defineProperty(ViewType, 'HEIGHT', {
    get: ViewType$HEIGHT_getInstance
  });
  Object.defineProperty(ViewType, 'ABSOLUTE', {
    get: ViewType$ABSOLUTE_getInstance
  });
  package$game.ViewType = ViewType;
  package$game.View = View;
  var package$color = package$perses.color || (package$perses.color = {});
  Object.defineProperty(package$color, 'Color', {
    get: Color_getInstance
  });
  Object.defineProperty(KeyCode, 'LEFT', {
    get: KeyCode$LEFT_getInstance
  });
  Object.defineProperty(KeyCode, 'UP', {
    get: KeyCode$UP_getInstance
  });
  Object.defineProperty(KeyCode, 'DOWN', {
    get: KeyCode$DOWN_getInstance
  });
  Object.defineProperty(KeyCode, 'RIGHT', {
    get: KeyCode$RIGHT_getInstance
  });
  Object.defineProperty(KeyCode, 'SPACE', {
    get: KeyCode$SPACE_getInstance
  });
  Object.defineProperty(KeyCode, 'MINUS', {
    get: KeyCode$MINUS_getInstance
  });
  Object.defineProperty(KeyCode, 'PLUS', {
    get: KeyCode$PLUS_getInstance
  });
  var package$input = package$perses.input || (package$perses.input = {});
  package$input.KeyCode = KeyCode;
  package$input.InputProcessor = InputProcessor;
  package$input.EmptyInputProcessor = EmptyInputProcessor;
  Object.defineProperty(package$input, 'Keys', {
    get: Keys_getInstance
  });
  package$input.getX_vryqu5$ = getX;
  package$input.getY_vryqu5$ = getY;
  var package$shader = package$perses.shader || (package$perses.shader = {});
  package$shader.ShaderProgram = ShaderProgram;
  package$shader.VertextAttributeInfo = VertextAttributeInfo;
  package$shader.ShaderProgramMesh = ShaderProgramMesh;
  var package$math = package$perses.math || (package$perses.math = {});
  package$math.Matrix4 = Matrix4;
  var package$sound = package$perses.sound || (package$perses.sound = {});
  package$sound.Sound = Sound;
  Object.defineProperty(package$sound, 'Sounds', {
    get: Sounds_getInstance
  });
  Object.defineProperty(package$sound, 'Music', {
    get: Music_getInstance
  });
  var package$text = package$perses.text || (package$perses.text = {});
  Object.defineProperty(package$text, 'Texts', {
    get: Texts_getInstance
  });
  var package$net = package$perses.net || (package$perses.net = {});
  package$net.getUrlAsString_61zpoe$ = getUrlAsString;
  vertexShaderSource = '\n    attribute vec2 a_position;\n    attribute vec2 a_boundingBox;\n    attribute vec2 a_texCoord;\n    attribute float a_scale;\n    attribute float a_rotation;\n\n    uniform mat4 u_projectionView;\n\n    varying vec2 v_textCoord;\n\n    mat4 scale(float scale) {\n        return mat4(\n            vec4(scale, 0.0,   0.0,   0.0),\n            vec4(0.0,   scale, 0.0,   0.0),\n            vec4(0.0,   0.0,   scale, 0.0),\n            vec4(0.0,   0.0,   0.0,   1.0)\n        );\n    }\n\n    mat4 rotateZ(float angle) {\n        return mat4(\n            vec4(cos(angle),   sin(angle),  0.0,  0.0),\n            vec4(-sin(angle),  cos(angle),  0.0,  0.0),\n            vec4(0.0,          0.0,         1.0,  0.0),\n            vec4(0.0,          0.0,         0.0,  1.0)\n        );\n    }\n\n    void main(void) {\n        v_textCoord = a_texCoord;\n\n        vec4 scaledBox = vec4(a_boundingBox, 1.0, 1.0) * scale(a_scale) * rotateZ(a_rotation);\n\n        gl_Position = u_projectionView * vec4(a_position + scaledBox.xy, 1.0, 1.0);\n    }\n';
  fragmentShaderSource = '\n    precision mediump float;\n\n    uniform sampler2D u_sampler;\n\n    varying vec2 v_textCoord;\n\n    void main(void) {\n        gl_FragColor = texture2D(u_sampler, v_textCoord);\n    }\n';
  Kotlin.defineModule('kudens', _);
  return _;
}(typeof kudens === 'undefined' ? {} : kudens, kotlin);

//@ sourceMappingURL=kudens.js.map
