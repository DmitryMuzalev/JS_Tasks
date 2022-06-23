class File {
  constructor(fullName, contents) {
    this._fullName = fullName;
    this.contents = contents;
    this.stepGets = 0;
    this.stepGetc = 0;
  }

  get fullName() {
    return this._fullName;
  }

  get indexDote() {
    return this._fullName.lastIndexOf(".");
  }

  get extension() {
    return this._fullName.slice(this.indexDote + 1);
  }

  get filename() {
    return this._fullName.slice(0, this.indexDote);
  }

  getContents() {
    return this.contents;
  }

  write(str) {
    if (this.contents.length !== 0) {
      this.contents = `${this.contents}\n${str}`;
    } else this.contents = str;
  }
  gets() {
    let currentString = this.contents.split("\n")[this.stepGets];
    this.stepGets++;
    return currentString;
  }
  getc() {
    let currentSymbol = this.contents.split("")[this.stepGetc];
    this.stepGetc++;
    return currentSymbol;
  }
}
