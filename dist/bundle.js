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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
})(CellType = exports.CellType || (exports.CellType = {}));
var GameObjectType;
(function (GameObjectType) {
    GameObjectType[GameObjectType["Player"] = 0] = "Player";
    GameObjectType[GameObjectType["Enemy"] = 1] = "Enemy";
    GameObjectType[GameObjectType["Potion"] = 2] = "Potion";
    GameObjectType[GameObjectType["Weapon"] = 3] = "Weapon";
    GameObjectType[GameObjectType["ExitDoor"] = 4] = "ExitDoor";
    GameObjectType[GameObjectType["Empty"] = 5] = "Empty";
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
/* 4 */
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
var GameLevel_1 = __webpack_require__(7);
var Entity_1 = __webpack_require__(12);
var RandomRange_1 = __webpack_require__(2);
var Enums_1 = __webpack_require__(0);
var Weapon_1 = __webpack_require__(3);
var PlayerStats_1 = __webpack_require__(8);
var RogueLike = (function (_super) {
    __extends(RogueLike, _super);
    function RogueLike(props) {
        var _this = _super.call(this, props) || this;
        _this.changePlayerPosition = function (direction) {
            var playerDir = direction.toLowerCase();
            var player = _this.state.player;
            if (playerDir === "up") {
                player.yPos--;
            }
            else if (playerDir === "left") {
                player.xPos--;
            }
            else if (playerDir === "right") {
                player.xPos++;
            }
            else if (playerDir === "down") {
                player.yPos++;
            }
            else {
                throw "Player direction was not specified";
            }
        };
        _this.startBattle = function (enemy) {
            if (enemy === _this.state.player) {
                throw "Player cannot be passed into startBattle method in RogueLike Component";
            }
            var player = _this.state.player;
            player.attack(enemy);
            enemy.attack(player);
            if (!player.isAlive) {
                //TODO: Show Game Over Screeen
                console.log("GAME OVER");
            }
            _this.setState({
                player: player
            });
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
            player.xPos = xPos;
            player.yPos = yPos;
            _this.setState({
                player: player
            });
        };
        var initPlayer = new Entity_1.Entity(0, 0, 100, new Weapon_1.Weapon("Stick", new RandomRange_1.RandomRange(5, 10)), Enums_1.GameObjectType.Player);
        _this.state = {
            player: initPlayer
        };
        return _this;
    }
    RogueLike.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(PlayerStats_1.PlayerStats, { player: this.state.player }),
            React.createElement(GameLevel_1.GameLevel, { spawnPlayer: this.spawnPlayer, equipWeapon: this.equipWeapon, healPlayer: this.healPlayer, startBattle: this.startBattle, changePlayerDirection: this.changePlayerPosition, player: this.state.player })));
    };
    return RogueLike;
}(React.Component));
exports.RogueLike = RogueLike;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
function BoardRow(props) {
    return (React.createElement("tr", null, props.children));
}
exports.BoardRow = BoardRow;


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
var RandomRange_1 = __webpack_require__(2);
var Enums_1 = __webpack_require__(0);
var Grid_1 = __webpack_require__(13);
var Enums_2 = __webpack_require__(0);
var BoardRow_1 = __webpack_require__(6);
var Tile_1 = __webpack_require__(9);
var GameLevel = (function (_super) {
    __extends(GameLevel, _super);
    function GameLevel(props) {
        var _this = _super.call(this, props) || this;
        //Checks if next cell exists (is not an index out of range) and tries to move it it
        //If there are no collisions with walls or enemies, player is moved in the direction they pressed
        _this.movePlayer = function (direction) {
            var player = _this.props.player;
            var grid = _this.state.grid;
            //move left
            if (direction === 37 || direction === 65) {
                try {
                    if (!_this.detectCollision(player.yPos, player.xPos - 1)) {
                        grid.cells[player.yPos][player.xPos].object = null;
                        grid.cells[player.yPos][player.xPos - 1].object = player;
                        _this.props.changePlayerDirection("left");
                    }
                    else {
                        return;
                    }
                }
                catch (exception) {
                    return;
                }
            }
            else if (direction === 38 || direction === 87) {
                try {
                    if (!_this.detectCollision(player.yPos - 1, player.xPos)) {
                        grid.cells[player.yPos][player.xPos].object = null;
                        grid.cells[player.yPos - 1][player.xPos].object = player;
                        _this.props.changePlayerDirection("up");
                    }
                    else {
                        return;
                    }
                }
                catch (exception) {
                    return;
                }
            }
            else if (direction === 39 || direction === 68) {
                try {
                    if (!_this.detectCollision(player.yPos, player.xPos + 1)) {
                        grid.cells[player.yPos][player.xPos].object = null;
                        grid.cells[player.yPos][player.xPos + 1].object = player;
                        _this.props.changePlayerDirection("right");
                    }
                    else {
                        return;
                    }
                }
                catch (exception) {
                    return;
                }
            }
            else if (direction === 40 || direction === 83) {
                try {
                    if (!_this.detectCollision(player.yPos + 1, player.xPos)) {
                        grid.cells[player.yPos][player.xPos].object = null;
                        grid.cells[player.yPos + 1][player.xPos].object = player;
                        _this.props.changePlayerDirection("down");
                    }
                    else {
                        return;
                    }
                }
                catch (exception) {
                    return;
                }
            }
            _this.setState({
                grid: grid
            });
        };
        _this.detectCollision = function (yNextPos, xNextPos) {
            var board = _this.state.grid;
            //Make sure the next object in the next cell contains something
            if (board.cells[yNextPos][xNextPos].object !== null) {
                //Collision with an Enemy
                if (board.cells[yNextPos][xNextPos].object.type === Enums_1.GameObjectType.Enemy) {
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
                else if (board.cells[yNextPos][xNextPos].object.type === Enums_1.GameObjectType.ExitDoor) {
                    //TODO: Load next level
                }
            }
            else if (board.cells[yNextPos][xNextPos].cellType === Enums_2.CellType.Wall) {
                return true;
            }
            return false;
        };
        _this.createNewLevel = function () {
        };
        var gridHeight = 50;
        var gridWidth = 75;
        var initGrid = new Grid_1.Grid(gridWidth, gridHeight);
        initGrid.createLevel();
        /*********************************
        **For Tests Only, Clear out ASAP**
        **********************************/
        var playerTile;
        var randCol = -1;
        var randRow = -1;
        do {
            randCol = RandomRange_1.RandomRange.getRangeInclusive(0, gridWidth - 1);
            randRow = RandomRange_1.RandomRange.getRangeInclusive(0, gridHeight - 1);
            playerTile = initGrid.cells[randRow][randCol].cellType;
        } while (playerTile === Enums_2.CellType.Wall);
        props.spawnPlayer(randCol, randRow);
        console.log(randRow, randCol);
        initGrid.cells[randRow][randCol].object = props.player;
        /**End Here**/
        //Place the player on the board at its starting position
        // initGrid.cells[props.player.yPos][props.player.xPos].object = props.player;
        // initGrid.cells[0][4].object = new Entity(0, 4, 25, new Weapon("Claws", new RandomRange(8 ,11)), GameObjectType.Enemy);
        // initGrid.cells[2][5].object = new Potion(25);
        // initGrid.cells[4][2].object = new Weapon("NiggBeater", new RandomRange(6.9, 69));
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
/* 8 */
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
        React.createElement("li", null, "Level: #"),
        React.createElement("li", null, "Next Level: # XP"),
        React.createElement("li", null, "Dungeon Level: #")));
}
exports.PlayerStats = PlayerStats;


/***/ }),
/* 9 */
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
        else if (props.cell.object.type === Enums_2.GameObjectType.ExitDoor) {
            return (React.createElement("td", { className: "exit-door" }));
        }
    }
    else if (props.cell.cellType === Enums_1.CellType.Wall) {
        return (React.createElement("td", { className: "wall" }));
    }
    //Render blank cell
    return (React.createElement("td", null));
}
exports.Tile = Tile;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(5);
var RogueLike_1 = __webpack_require__(4);
ReactDOM.render(React.createElement(RogueLike_1.RogueLike, null), document.getElementById("app"));


/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Weapon_1 = __webpack_require__(3);
var RandomRange_1 = __webpack_require__(2);
var Entity = (function () {
    function Entity(x, y, health, weapon, type) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (health === void 0) { health = 100; }
        if (weapon === void 0) { weapon = new Weapon_1.Weapon("Stick", new RandomRange_1.RandomRange(1, 3)); }
        this.xPos = x;
        this.yPos = y;
        this.health = health;
        this.weapon = weapon;
        this.type = type;
        this.isAlive = true;
    }
    Entity.prototype.attack = function (target) {
        if (target === this) {
            throw "Cannot attack self!";
        }
        target.takeDamage(this.weapon.attackRange.random());
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Cell_1 = __webpack_require__(11);
var Enums_1 = __webpack_require__(0);
var Room_1 = __webpack_require__(15);
var Hallway_1 = __webpack_require__(14);
var RandomRange_1 = __webpack_require__(2);
//TODO: Perhaps have this object take care of generating enemies, weapons, potion, and level layout?
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
        } while ((room.xPos + room.width) > this.cells[0].length - 1 ||
            (room.yPos + room.height) > this.cells.length - 1);
        //create rooms
        for (var i = 0; i < numberOfRooms; i++) {
            //get a random direction for the hallawy
            randDir = RandomRange_1.RandomRange.getRangeInclusive(0, 3);
            room.draw(this);
            hallway = new Hallway_1.Hallway(this.hallwaySize, room.xPos, room.yPos, randDir);
            hallway.draw(this, room);
            room = new Room_1.Room(this.roomSize, this.roomSize, hallway.endX, hallway.endY);
            //Make sure that if we are headed north or west we offset the room
            //starting position by its width/height so that it doesnt overlap
            //the newly drawn hallway that leads to it
            if (hallway.direction === Enums_1.Direction.North)
                room.yPos -= (room.height - 1);
            else if (hallway.direction === Enums_1.Direction.West)
                room.xPos -= (room.width - 1);
            //ensure room start does not go out of bounds of the grid,
            //if so just set to zero
            room.xPos < 0 ? room.xPos = 0 : null;
            room.yPos < 0 ? room.yPos = 0 : null;
        }
        //draw last room so that we dont end with a hallway
        room.draw(this);
    };
    return Grid;
}());
exports.Grid = Grid;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RandomRange_1 = __webpack_require__(2);
var Enums_1 = __webpack_require__(0);
var Enums_2 = __webpack_require__(0);
var Hallway = (function () {
    function Hallway(lengthRange, xPos, yPos, direction) {
        var hallwayLength = lengthRange.random();
        this.length = hallwayLength;
        this.xPos = xPos;
        this.yPos = yPos;
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
                this.xPos = this.offSetCoord(this.xPos, room.width);
                //draw the hallway
                yCoord = this.yPos;
                for (var i = 0; i < this.length; i++) {
                    grid.cells[yCoord][this.xPos].cellType = Enums_2.CellType.Ground;
                    yCoord--;
                }
                //set end position for new room to be made
                this.endX = this.xPos;
                this.endY = yCoord;
                break;
            case Enums_1.Direction.East:
                this.xPos += room.width;
                this.yPos = this.offSetCoord(this.yPos, room.height);
                xCoord = this.xPos;
                for (var i = 0; i < this.length; i++) {
                    grid.cells[this.yPos][xCoord].cellType = Enums_2.CellType.Ground;
                    xCoord++;
                }
                this.endX = xCoord;
                this.endY = this.yPos;
                break;
            case Enums_1.Direction.West:
                this.yPos = this.offSetCoord(this.yPos, room.height);
                xCoord = this.xPos;
                for (var i = 0; i < this.length; i++) {
                    grid.cells[this.yPos][xCoord].cellType = Enums_2.CellType.Ground;
                    xCoord--;
                }
                this.endX = xCoord;
                this.endY = this.yPos;
                break;
            case Enums_1.Direction.South:
                this.xPos = this.offSetCoord(this.xPos, room.width);
                this.yPos += room.height;
                yCoord = this.yPos;
                for (var i = 0; i < this.length; i++) {
                    grid.cells[yCoord][this.xPos].cellType = Enums_2.CellType.Ground;
                    yCoord++;
                }
                this.endX = this.xPos;
                this.endY = yCoord;
                break;
        }
    };
    Hallway.prototype.checkBoundaryCollision = function (room, direction, grid) {
        console.log("Direction: ", direction);
        console.log("Hallway: ", this);
        //debugger;
        switch (direction) {
            case Enums_1.Direction.North:
                if ((this.yPos - this.length) < 0)
                    return true;
                break;
            case Enums_1.Direction.East:
                //we must account for the room width here as well
                if (((this.xPos + room.width) + this.length) > grid.cells.length - 1)
                    return true;
                break;
            case Enums_1.Direction.West:
                if ((this.xPos - this.length) < 0)
                    return true;
                break;
            case Enums_1.Direction.South:
                if (((this.yPos + room.height) + this.length) > grid.cells.length - 1)
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Enums_1 = __webpack_require__(0);
var Room = (function () {
    function Room(heightRange, widthRange, xPos, yPos) {
        var roomHeight = heightRange.random();
        var roomWidth = heightRange.random();
        this.height = roomHeight;
        this.width = roomWidth;
        this.xPos = xPos;
        this.yPos = yPos;
    }
    Room.prototype.draw = function (grid) {
        var xOffset = this.xPos + this.width;
        var yOffset = this.yPos + this.height;
        var gridFirstDimension = grid.cells[0].length - 1;
        var gridSecondDimension = grid.cells.length - 1;
        //If room is going to go outside the bounds of the grid,
        //offset the start position by the how many cells it is overflowing so that
        //grid does not go out of bounds
        if (xOffset > gridFirstDimension) {
            var overflow = xOffset - (gridFirstDimension);
            this.xPos -= overflow;
        }
        if (yOffset > gridSecondDimension) {
            var overflow = yOffset - (gridSecondDimension);
            this.yPos -= overflow;
        }
        for (var j = 0; j < this.height; j++) {
            var yCoord = this.yPos + j;
            for (var z = 0; z < this.width; z++) {
                var xCoord = this.xPos + z;
                if (!grid.cells[yCoord] || !grid.cells[yCoord][xCoord])
                    debugger;
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