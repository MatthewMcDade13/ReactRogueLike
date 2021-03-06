/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CellType;
(function (CellType) {
    CellType[CellType["Wall"] = 0] = "Wall";
    CellType[CellType["Ground"] = 1] = "Ground";
    CellType[CellType["Exit"] = 2] = "Exit";
})(CellType = exports.CellType || (exports.CellType = {}));
var GameObjectType;
(function (GameObjectType) {
    GameObjectType[GameObjectType["Player"] = 0] = "Player";
    GameObjectType[GameObjectType["Enemy"] = 1] = "Enemy";
    GameObjectType[GameObjectType["Potion"] = 2] = "Potion";
    GameObjectType[GameObjectType["Weapon"] = 3] = "Weapon";
    GameObjectType[GameObjectType["Empty"] = 4] = "Empty";
})(GameObjectType = exports.GameObjectType || (exports.GameObjectType = {}));
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["West"] = 1] = "West";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["East"] = 3] = "East";
})(Direction = exports.Direction || (exports.Direction = {}));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RandomRange = (function () {
    function RandomRange(min, max) {
        this.min = min;
        this.max = max;
    }
    RandomRange.prototype.random = function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    };
    RandomRange.prototype.randomFloat = function () {
        return Math.random() * (this.max - this.min) + this.min;
    };
    RandomRange.getRangeInclusive = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    RandomRange.getRangeExclusive = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    return RandomRange;
}());
exports.RandomRange = RandomRange;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Coordinate = (function () {
    function Coordinate(x, y) {
        this.x = x;
        this.y = y;
    }
    return Coordinate;
}());
exports.Coordinate = Coordinate;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Enums_1 = __webpack_require__(0);
var Weapon = (function () {
    function Weapon(name, attackRange) {
        this.name = name;
        this.attackRange = attackRange;
        this.type = Enums_1.GameObjectType.Weapon;
    }
    return Weapon;
}());
exports.Weapon = Weapon;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Weapon_1 = __webpack_require__(4);
var RandomRange_1 = __webpack_require__(2);
var Coordinate_1 = __webpack_require__(3);
var EntityLevel_1 = __webpack_require__(6);
var Entity = (function () {
    function Entity(x, y, health, weapon, type, modifier, level) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (health === void 0) { health = 100; }
        if (weapon === void 0) { weapon = new Weapon_1.Weapon("Stick", new RandomRange_1.RandomRange(1, 3)); }
        if (modifier === void 0) { modifier = 1; }
        if (level === void 0) { level = new EntityLevel_1.EntityLevel(); }
        this.pos = new Coordinate_1.Coordinate(x, y);
        this.health = health * modifier;
        this.weapon = weapon;
        this.type = type;
        this.isAlive = true;
        this.level = level;
    }
    Entity.prototype.attack = function (target) {
        var _this = this;
        if (target === this) {
            throw new Error("Cannot attack self!");
        }
        target.takeDamage(this.weapon.attackRange.random());
        //If target is dead, check if we leveled up,
        //if so, increase health
        if (!target.isAlive)
            this.level.gainXP(function (didLevel) {
                if (didLevel && _this.health < 100)
                    _this.health = 100;
                else if (didLevel && _this.health > 100)
                    _this.health += 25;
            });
    };
    Entity.prototype.takeDamage = function (damage) {
        this.health = this.health - damage;
        if (this.health <= 0) {
            this.isAlive = false;
        }
    };
    return Entity;
}());
exports.Entity = Entity;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EntityLevel = (function () {
    function EntityLevel(level) {
        if (level === void 0) { level = 1; }
        this.level = level;
        this.setLevelXP();
    }
    //can pass in a callback function for modifing data based on if level has gone up or not
    EntityLevel.prototype.gainXP = function (callback) {
        var didLevel = false;
        this.currentXP += this.XPIncrementAmount;
        if (this.currentXP >= this.XPToLevel) {
            this.level++;
            didLevel = true;
            this.setLevelXP();
        }
        return callback(didLevel);
    };
    EntityLevel.prototype.setLevelXP = function () {
        this.XPIncrementAmount = this.level * 5;
        this.XPToLevel = this.level * 20;
        this.currentXP = 0;
    };
    EntityLevel.prototype.getXPToLevel = function () {
        return this.XPToLevel;
    };
    EntityLevel.prototype.getXP = function () {
        return this.currentXP;
    };
    return EntityLevel;
}());
exports.EntityLevel = EntityLevel;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var GameLevel_1 = __webpack_require__(10);
var Entity_1 = __webpack_require__(5);
var RandomRange_1 = __webpack_require__(2);
var Enums_1 = __webpack_require__(0);
var Weapon_1 = __webpack_require__(4);
var PlayerStats_1 = __webpack_require__(11);
var RogueLike = (function (_super) {
    __extends(RogueLike, _super);
    function RogueLike(props) {
        var _this = _super.call(this, props) || this;
        _this.startNewLevel = function () {
            console.log(_this);
            _this.setState({
                level: _this.state.level + 1
            });
        };
        _this.changePlayerPosition = function (direction) {
            var playerDir = direction.toLowerCase();
            var player = _this.state.player;
            if (playerDir === "up") {
                player.pos.y--;
            }
            else if (playerDir === "left") {
                player.pos.x--;
            }
            else if (playerDir === "right") {
                player.pos.x++;
            }
            else if (playerDir === "down") {
                player.pos.y++;
            }
            else {
                throw "Player direction was not specified";
            }
        };
        _this.startBattle = function (enemy) {
            if (enemy === _this.state.player) {
                throw new Error("Player cannot be passed into startBattle method in RogueLike Component");
            }
            var player = _this.state.player;
            enemy.attack(player);
            player.attack(enemy);
            if (!player.isAlive) {
                //TODO: Show Game Over Screeen
                console.log("GAME OVER");
            }
            _this.setState({
                player: player
            });
            console.log("in startBattle: ", player.health);
        };
        _this.healPlayer = function (potion) {
            var player = _this.state.player;
            player.health = player.health + potion.healAmount;
            _this.setState({
                player: player
            });
        };
        _this.equipWeapon = function (weapon) {
            var player = _this.state.player;
            player.weapon = weapon;
            _this.setState({
                player: player
            });
        };
        _this.spawnPlayer = function (xPos, yPos) {
            var player = _this.state.player;
            player.pos.x = xPos;
            player.pos.y = yPos;
            _this.setState({
                player: player
            });
        };
        var initPlayer = new Entity_1.Entity(0, 0, 100, new Weapon_1.Weapon("Stick", new RandomRange_1.RandomRange(5, 10)), Enums_1.GameObjectType.Player, 1);
        _this.state = {
            player: initPlayer,
            level: 0
        };
        return _this;
    }
    RogueLike.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(PlayerStats_1.PlayerStats, { player: this.state.player, level: this.state.level }),
            React.createElement(GameLevel_1.GameLevel, { level: this.state.level, spawnPlayer: this.spawnPlayer, equipWeapon: this.equipWeapon, healPlayer: this.healPlayer, startBattle: this.startBattle, changePlayerDirection: this.changePlayerPosition, startNewLevel: this.startNewLevel, player: this.state.player })));
    };
    return RogueLike;
}(React.Component));
exports.RogueLike = RogueLike;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
function BoardRow(props) {
    return (React.createElement("tr", null, props.children));
}
exports.BoardRow = BoardRow;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var Entity_1 = __webpack_require__(5);
var EntityLevel_1 = __webpack_require__(6);
var RandomRange_1 = __webpack_require__(2);
var Enums_1 = __webpack_require__(0);
var Weapon_1 = __webpack_require__(4);
var Potion_1 = __webpack_require__(17);
var Grid_1 = __webpack_require__(15);
var Coordinate_1 = __webpack_require__(3);
var Enums_2 = __webpack_require__(0);
var BoardRow_1 = __webpack_require__(9);
var Tile_1 = __webpack_require__(12);
var GameLevel = (function (_super) {
    __extends(GameLevel, _super);
    function GameLevel(props) {
        var _this = _super.call(this, props) || this;
        _this.maxPotions = 5;
        //Checks if next cell exists (is not an index out of range) and tries to move it it
        //If there are no collisions with walls or enemies, player is moved in the direction they pressed
        _this.movePlayer = function (direction) {
            var player = _this.props.player;
            var grid = _this.state.grid;
            //move left
            if (direction === 37 || direction === 65) {
                if (!_this.detectCollision(player.pos.y, player.pos.x - 1)) {
                    grid.cells[player.pos.y][player.pos.x].object = null;
                    grid.cells[player.pos.y][player.pos.x - 1].object = player;
                    _this.props.changePlayerDirection("left");
                }
                else {
                    return;
                }
            }
            else if (direction === 38 || direction === 87) {
                if (!_this.detectCollision(player.pos.y - 1, player.pos.x)) {
                    grid.cells[player.pos.y][player.pos.x].object = null;
                    grid.cells[player.pos.y - 1][player.pos.x].object = player;
                    _this.props.changePlayerDirection("up");
                }
                else {
                    return;
                }
            }
            else if (direction === 39 || direction === 68) {
                if (!_this.detectCollision(player.pos.y, player.pos.x + 1)) {
                    grid.cells[player.pos.y][player.pos.x].object = null;
                    grid.cells[player.pos.y][player.pos.x + 1].object = player;
                    _this.props.changePlayerDirection("right");
                }
                else {
                    return;
                }
            }
            else if (direction === 40 || direction === 83) {
                if (!_this.detectCollision(player.pos.y + 1, player.pos.x)) {
                    grid.cells[player.pos.y][player.pos.x].object = null;
                    grid.cells[player.pos.y + 1][player.pos.x].object = player;
                    _this.props.changePlayerDirection("down");
                }
                else {
                    return;
                }
            }
            _this.setState({
                grid: grid
            });
        };
        _this.detectCollision = function (yNextPos, xNextPos) {
            var board = _this.state.grid;
            //check if we are going outside the bounds of the grid,
            //if so just return
            if (yNextPos > board.cells.length - 1 || yNextPos < 0 ||
                xNextPos > board.cells[0].length - 1 || xNextPos < 0) {
                return true;
            }
            //Make sure the next object in the next cell contains something
            if (board.cells[yNextPos][xNextPos].object !== null) {
                //Collision with an Enemy
                if (board.cells[yNextPos][xNextPos].object.type === Enums_1.GameObjectType.Enemy) {
                    ;
                    var enemy = board.cells[yNextPos][xNextPos].object;
                    //Player and enemy battle when they collide!
                    _this.props.startBattle(enemy);
                    //If enemy is dead after battle, set it to null and update the board
                    if (!enemy.isAlive) {
                        enemy = null;
                        _this.setState({
                            grid: board
                        });
                        return false;
                    }
                    return true;
                }
                else if (board.cells[yNextPos][xNextPos].object.type === Enums_1.GameObjectType.Potion) {
                    var potion = board.cells[yNextPos][xNextPos].object;
                    _this.props.healPlayer(potion);
                    //Dispose of the potion after it is used
                    potion = null;
                    _this.setState({
                        grid: board
                    });
                    return false;
                }
                else if (board.cells[yNextPos][xNextPos].object.type === Enums_1.GameObjectType.Weapon) {
                    var weapon = board.cells[yNextPos][xNextPos].object;
                    _this.props.equipWeapon(weapon);
                    //Dispose of the weapon on the grid after it is picked up
                    weapon = null;
                    _this.setState({
                        grid: board
                    });
                }
            }
            else if (board.cells[yNextPos][xNextPos].cellType === Enums_2.CellType.Exit) {
                //start new level
                _this.props.startNewLevel();
            }
            else if (board.cells[yNextPos][xNextPos].cellType === Enums_2.CellType.Wall) {
                return true;
            }
            return false;
        };
        _this.createNewLevel = function () {
            var grid = _this.state.grid;
            var level = _this.props.level;
            grid.createLevel();
            _this.spawnPlayer();
            _this.spawnExit();
            //Populate the level
            switch (level) {
                case 1:
                    _this.spawnEnemies(new RandomRange_1.RandomRange(1, 3), new RandomRange_1.RandomRange(3, 5), new RandomRange_1.RandomRange(0.1, 0.3));
                    _this.spawnItems(new RandomRange_1.RandomRange(20, 25));
                    break;
                case 2:
                    _this.spawnEnemies(new RandomRange_1.RandomRange(2, 5), new RandomRange_1.RandomRange(5, 10), new RandomRange_1.RandomRange(0.3, 0.42));
                    _this.spawnItems(new RandomRange_1.RandomRange(25, 45));
                    break;
                case 3:
                    _this.spawnEnemies(new RandomRange_1.RandomRange(3, 7), new RandomRange_1.RandomRange(11, 15), new RandomRange_1.RandomRange(0.42, 0.55));
                    _this.spawnItems(new RandomRange_1.RandomRange(35, 50));
                    break;
                case 4:
                    _this.spawnEnemies(new RandomRange_1.RandomRange(5, 10), new RandomRange_1.RandomRange(15, 16), new RandomRange_1.RandomRange(0.55, 0.75));
                    _this.spawnItems(new RandomRange_1.RandomRange(50, 75));
                    break;
            }
            _this.setState({
                grid: grid
            });
        };
        var gridHeight = 50;
        var gridWidth = 75;
        var initGrid = new Grid_1.Grid(gridWidth, gridHeight);
        initGrid.createLevel();
        /*********************************
        **For Tests Only, Clear out ASAP**
        **********************************/
        _this.spawnPlayer(initGrid);
        // let playerTile: CellType;
        // let position: Coordinate = null;
        // position = this.getRandomLocation(initGrid);
        // props.spawnPlayer(position.x, position.y);        
        // initGrid.cells[position.y][position.x].object = props.player;
        _this.spawnExit(initGrid);
        _this.spawnEnemies(new RandomRange_1.RandomRange(1, 2), new RandomRange_1.RandomRange(3, 5), new RandomRange_1.RandomRange(0.1, 0.3), initGrid);
        _this.spawnItems(new RandomRange_1.RandomRange(10, 20), initGrid);
        /**End Here**/
        _this.state = {
            grid: initGrid
        };
        return _this;
    }
    GameLevel.prototype.componentDidMount = function () {
        var _this = this;
        document.addEventListener("keydown", function (event) {
            if ((event.keyCode >= 37 && event.keyCode <= 40) ||
                event.keyCode === 65 || event.keyCode === 87 ||
                event.keyCode === 68 || event.keyCode === 83) {
                _this.movePlayer(event.keyCode);
            }
        });
    };
    GameLevel.prototype.componentDidUpdate = function (prevProps, prevState) {
        //If we updated the level, create a new one
        if (this.props.level !== prevProps.level) {
            this.createNewLevel();
        }
    };
    GameLevel.prototype.getRandomLocation = function (grid) {
        var randX = -1;
        var randY = -1;
        do {
            randX = RandomRange_1.RandomRange.getRangeExclusive(0, grid.cells[0].length);
            randY = RandomRange_1.RandomRange.getRangeExclusive(0, grid.cells.length);
        } while (grid.cells[randY][randX].cellType !== Enums_2.CellType.Ground ||
            grid.cells[randY][randX].object !== null);
        return new Coordinate_1.Coordinate(randX, randY);
    };
    GameLevel.prototype.spawnPlayer = function (firstGrid) {
        var grid = firstGrid ? firstGrid : this.state.grid;
        var randPos = this.getRandomLocation(grid);
        this.props.spawnPlayer(randPos.x, randPos.y);
        grid.cells[randPos.y][randPos.x].object = this.props.player;
    };
    GameLevel.prototype.spawnExit = function (firstGrid) {
        var grid = firstGrid ? firstGrid : this.state.grid;
        var randPos = this.getRandomLocation(grid);
        grid.cells[randPos.y][randPos.x].cellType = Enums_2.CellType.Exit;
    };
    GameLevel.prototype.spawnEnemies = function (enemyLevelRange, enemyRange, modifierRange, firstGrid) {
        var grid = firstGrid ? firstGrid : this.state.grid;
        var level = firstGrid ? 0 : this.props.level;
        var enemies = enemyRange.random();
        var enemy = null;
        var position = null;
        var attackRange = null;
        if (level === 0)
            attackRange = new RandomRange_1.RandomRange(5, 10);
        else if (level === 1)
            attackRange = new RandomRange_1.RandomRange(15, 20);
        else if (level === 2)
            attackRange = new RandomRange_1.RandomRange(11, 14);
        else if (level === 3)
            attackRange = new RandomRange_1.RandomRange(15, 25);
        else if (level === 4)
            attackRange = new RandomRange_1.RandomRange(25, 35);
        for (var i = 0; i < enemies; i++) {
            position = this.getRandomLocation(grid);
            enemy = new Entity_1.Entity(position.x, position.y, 100, new Weapon_1.Weapon("Claw", attackRange), Enums_1.GameObjectType.Enemy, modifierRange.randomFloat(), new EntityLevel_1.EntityLevel(enemyLevelRange.random()));
            grid.cells[position.y][position.x].object = enemy;
        }
        this.setState({
            grid: grid
        });
    };
    GameLevel.prototype.spawnItems = function (potionHealthRange, firstGrid) {
        //TODO: Finish this func
        var grid = firstGrid ? firstGrid : this.state.grid;
        var level = firstGrid ? 0 : this.props.level;
        var potion = null;
        var weapon = null;
        var randPos = null;
        var potions = RandomRange_1.RandomRange.getRangeInclusive(1, this.maxPotions);
        if (level === 0)
            weapon = new Weapon_1.Weapon("Sword", new RandomRange_1.RandomRange(3, 25));
        else if (level === 1)
            weapon = new Weapon_1.Weapon("Axe", new RandomRange_1.RandomRange(10, 35));
        else if (level === 2)
            weapon = new Weapon_1.Weapon("Mace", new RandomRange_1.RandomRange(25, 40));
        else if (level === 3)
            weapon = new Weapon_1.Weapon("Claymore", new RandomRange_1.RandomRange(40, 48));
        else if (level === 4)
            weapon = new Weapon_1.Weapon("Katana", new RandomRange_1.RandomRange(55, 78));
        randPos = this.getRandomLocation(grid);
        grid.cells[randPos.y][randPos.x].object = weapon;
        for (var i = 0; i < potions; i++) {
            potion = new Potion_1.Potion(potionHealthRange.random());
            randPos = this.getRandomLocation(grid);
            grid.cells[randPos.y][randPos.x].object = potion;
        }
        this.setState({
            grid: grid
        });
    };
    GameLevel.prototype.componentWillUnmount = function () {
    };
    GameLevel.prototype.render = function () {
        var keyCounter = 0;
        return (React.createElement("div", { className: "grid-wrapper" },
            React.createElement("table", { className: "grid" },
                React.createElement("tbody", null, this.state.grid.cells.map(function (row) { return React.createElement(BoardRow_1.BoardRow, null, row.map(function (cell) { return React.createElement(Tile_1.Tile, { cell: cell, key: keyCounter++ }); })); })))));
    };
    return GameLevel;
}(React.Component));
exports.GameLevel = GameLevel;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
function PlayerStats(props) {
    return (React.createElement("ul", { className: "stats" },
        React.createElement("li", null,
            "Health: ",
            props.player.health),
        React.createElement("li", null,
            "Weapon: ",
            props.player.weapon.name),
        React.createElement("li", null,
            "Attack Range: ",
            props.player.weapon.attackRange.min,
            " - ",
            props.player.weapon.attackRange.max),
        React.createElement("li", null,
            "Level: ",
            props.player.level.level),
        React.createElement("li", null,
            "Next Level: ",
            props.player.level.getXP(),
            " / ",
            props.player.level.getXPToLevel(),
            " XP"),
        React.createElement("li", null,
            "Dungeon Level: ",
            props.level)));
}
exports.PlayerStats = PlayerStats;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var Enums_1 = __webpack_require__(0);
var Enums_2 = __webpack_require__(0);
function Tile(props) {
    if (props.cell.object) {
        //Render Player
        if (props.cell.object.type === Enums_2.GameObjectType.Player) {
            return (React.createElement("td", { className: "player" }));
        }
        else if (props.cell.object.type === Enums_2.GameObjectType.Enemy) {
            return (React.createElement("td", { className: "enemy" }));
        }
        else if (props.cell.object.type === Enums_2.GameObjectType.Potion) {
            return (React.createElement("td", { className: "potion" }));
        }
        else if (props.cell.object.type === Enums_2.GameObjectType.Weapon) {
            return (React.createElement("td", { className: "weapon" }));
        }
    }
    else if (props.cell.cellType === Enums_1.CellType.Exit) {
        return (React.createElement("td", { className: "exit-door" }));
    }
    else if (props.cell.cellType === Enums_1.CellType.Wall) {
        return (React.createElement("td", { className: "wall" }));
    }
    //Render blank cell
    return (React.createElement("td", null));
}
exports.Tile = Tile;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(8);
var RogueLike_1 = __webpack_require__(7);
ReactDOM.render(React.createElement(RogueLike_1.RogueLike, null), document.getElementById("app"));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Enums_1 = __webpack_require__(0);
var Cell = (function () {
    function Cell(object, cellType) {
        if (object === void 0) { object = null; }
        if (cellType === void 0) { cellType = Enums_1.CellType.Wall; }
        this.object = object;
        this.cellType = cellType;
    }
    Cell.prototype.resetToDefaultValues = function () {
        this.object = null;
        this.cellType = Enums_1.CellType.Wall;
    };
    return Cell;
}());
exports.Cell = Cell;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Cell_1 = __webpack_require__(14);
var Enums_1 = __webpack_require__(0);
var Room_1 = __webpack_require__(18);
var Hallway_1 = __webpack_require__(16);
var RandomRange_1 = __webpack_require__(2);
var Grid = (function () {
    function Grid(width, height) {
        var newBoard = [];
        for (var r = 0; r < height; r++) {
            var row = [];
            for (var c = 0; c < width; c++) {
                row.push(new Cell_1.Cell());
            }
            newBoard.push(row);
        }
        this.cells = newBoard;
        this.roomSize = new RandomRange_1.RandomRange(4, 9);
        this.hallwaySize = new RandomRange_1.RandomRange(3, 5);
        this.numberOfRooms = new RandomRange_1.RandomRange(30, 40);
    }
    Grid.prototype.resetGrid = function () {
        for (var r = 0; r < this.cells.length; r++) {
            for (var c = 0; c < this.cells[r].length; c++) {
                this.cells[r][c].resetToDefaultValues();
            }
        }
    };
    Grid.prototype.createLevel = function () {
        this.resetGrid();
        this.drawGrid();
    };
    Grid.prototype.drawGrid = function () {
        var numberOfRooms = this.numberOfRooms.random();
        var randRow = -1;
        var randCol = -1;
        var room = null;
        var nextRoom = null;
        var hallway = null;
        var randDir = RandomRange_1.RandomRange.getRangeInclusive(0, 3);
        //Pick a random spot on the grid for the first room
        do {
            randRow = Math.floor(Math.random() * this.cells.length);
            randCol = Math.floor(Math.random() * this.cells[0].length);
            room = new Room_1.Room(this.roomSize, this.roomSize, randCol, randRow);
        } while ((room.pos.x + room.width) > this.cells[0].length - 1 ||
            (room.pos.y + room.height) > this.cells.length - 1);
        //create rooms
        for (var i = 0; i < numberOfRooms; i++) {
            //get a random direction for the hallawy
            randDir = RandomRange_1.RandomRange.getRangeInclusive(0, 3);
            room.draw(this);
            hallway = new Hallway_1.Hallway(this.hallwaySize, room.pos.x, room.pos.y, randDir);
            hallway.draw(this, room);
            room = new Room_1.Room(this.roomSize, this.roomSize, hallway.endPos.x, hallway.endPos.y);
            //Make sure that if we are headed north or west we offset the room
            //starting position by its width/height so that it doesnt overlap
            //the newly drawn hallway that leads to it
            if (hallway.direction === Enums_1.Direction.North)
                room.pos.y -= (room.height - 1);
            else if (hallway.direction === Enums_1.Direction.West)
                room.pos.x -= (room.width - 1);
            //ensure room start does not go out of bounds of the grid,
            //if so just set to zero
            room.pos.x < 0 ? room.pos.x = 0 : null;
            room.pos.y < 0 ? room.pos.y = 0 : null;
        }
        //draw last room so that we dont end with a hallway
        room.draw(this);
    };
    return Grid;
}());
exports.Grid = Grid;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RandomRange_1 = __webpack_require__(2);
var Enums_1 = __webpack_require__(0);
var Enums_2 = __webpack_require__(0);
var Coordinate_1 = __webpack_require__(3);
var Hallway = (function () {
    function Hallway(lengthRange, xPos, yPos, direction) {
        var hallwayLength = lengthRange.random();
        this.length = hallwayLength;
        this.pos = new Coordinate_1.Coordinate(xPos, yPos);
        //default values, will be set later when hallway is drawn
        this.endPos = new Coordinate_1.Coordinate(0, 0);
        this.direction = direction;
    }
    Hallway.prototype.draw = function (grid, room) {
        var xCoord = -1;
        var yCoord = -1;
        //change direction if hallway is going to go outside the bounds of the grid
        if (this.checkBoundaryCollision(room, this.direction, grid)) {
            this.direction = (this.direction + 2) % 4;
        }
        switch (this.direction) {
            case Enums_1.Direction.North:
                //Find the offset of the hallway
                this.pos.x = this.offSetCoord(this.pos.x, room.width);
                //draw the hallway
                yCoord = this.pos.y;
                for (var i = 0; i < this.length; i++) {
                    grid.cells[yCoord][this.pos.x].cellType = Enums_2.CellType.Ground;
                    yCoord--;
                }
                //set end position for new room to be made
                this.endPos.x = this.pos.x;
                this.endPos.y = yCoord;
                break;
            case Enums_1.Direction.East:
                this.pos.x += room.width;
                this.pos.y = this.offSetCoord(this.pos.y, room.height);
                xCoord = this.pos.x;
                for (var i = 0; i < this.length; i++) {
                    grid.cells[this.pos.y][xCoord].cellType = Enums_2.CellType.Ground;
                    xCoord++;
                }
                this.endPos.x = xCoord;
                this.endPos.y = this.pos.y;
                break;
            case Enums_1.Direction.West:
                this.pos.y = this.offSetCoord(this.pos.y, room.height);
                xCoord = this.pos.x;
                for (var i = 0; i < this.length; i++) {
                    grid.cells[this.pos.y][xCoord].cellType = Enums_2.CellType.Ground;
                    xCoord--;
                }
                this.endPos.x = xCoord;
                this.endPos.y = this.pos.y;
                break;
            case Enums_1.Direction.South:
                this.pos.x = this.offSetCoord(this.pos.x, room.width);
                this.pos.y += room.height;
                yCoord = this.pos.y;
                for (var i = 0; i < this.length; i++) {
                    grid.cells[yCoord][this.pos.x].cellType = Enums_2.CellType.Ground;
                    yCoord++;
                }
                this.endPos.x = this.pos.x;
                this.endPos.y = yCoord;
                break;
        }
    };
    Hallway.prototype.checkBoundaryCollision = function (room, direction, grid) {
        switch (direction) {
            case Enums_1.Direction.North:
                if ((this.pos.y - this.length) < 0)
                    return true;
                break;
            case Enums_1.Direction.East:
                //we must account for the room width here as well
                if (((this.pos.x + room.width) + this.length) > grid.cells.length - 1)
                    return true;
                break;
            case Enums_1.Direction.West:
                if ((this.pos.x - this.length) < 0)
                    return true;
                break;
            case Enums_1.Direction.South:
                if (((this.pos.y + room.height) + this.length) > grid.cells.length - 1)
                    return true;
                break;
        }
        return false;
    };
    Hallway.prototype.offSetCoord = function (coord, maxOffset) {
        return RandomRange_1.RandomRange.getRangeExclusive(coord, coord + maxOffset);
    };
    return Hallway;
}());
exports.Hallway = Hallway;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Enums_1 = __webpack_require__(0);
var Potion = (function () {
    function Potion(healAmount) {
        this.type = Enums_1.GameObjectType.Potion;
        this.healAmount = healAmount;
    }
    return Potion;
}());
exports.Potion = Potion;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Enums_1 = __webpack_require__(0);
var Coordinate_1 = __webpack_require__(3);
var Room = (function () {
    function Room(heightRange, widthRange, xPos, yPos) {
        var roomHeight = heightRange.random();
        var roomWidth = heightRange.random();
        this.height = roomHeight;
        this.width = roomWidth;
        this.pos = new Coordinate_1.Coordinate(xPos, yPos);
    }
    Room.prototype.draw = function (grid) {
        var xOffset = this.pos.x + this.width;
        var yOffset = this.pos.y + this.height;
        var gridFirstDimension = grid.cells[0].length - 1;
        var gridSecondDimension = grid.cells.length - 1;
        //If room is going to go outside the bounds of the grid,
        //offset the start position by the how many cells it is overflowing so that
        //grid does not go out of bounds
        if (xOffset > gridFirstDimension) {
            var overflow = xOffset - (gridFirstDimension);
            this.pos.x -= overflow;
        }
        if (yOffset > gridSecondDimension) {
            var overflow = yOffset - (gridSecondDimension);
            this.pos.y -= overflow;
        }
        for (var j = 0; j < this.height; j++) {
            var yCoord = this.pos.y + j;
            for (var z = 0; z < this.width; z++) {
                var xCoord = this.pos.x + z;
                grid.cells[yCoord][xCoord].cellType = Enums_1.CellType.Ground;
            }
        }
    };
    return Room;
}());
exports.Room = Room;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map