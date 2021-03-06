module.exports = class User {
  constructor(_name,_cli){
    this.name = _name;
    this.cli = _cli;
    this.x = this.y = 0;
  }
};