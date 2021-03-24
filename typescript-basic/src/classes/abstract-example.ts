abstract class Android {
  abstract getVersion(): number;

  printVersion() {
    console.log("Hello, " + this.getVersion());
  }
}

class Sumsung extends Android {
  name = "sumsung";
  version = 10;

  getVersion() {
    return this.version;
  }
}

let sumsung = new Sumsung();
sumsung.getVersion();
