export class Pipeline {
  public constructor(...pipes) {
    this.pipes = [];
    this.pipe(...pipes);
  }
  
  public pipe(...callbacks) {
    for(const cb of callbacks) {
      if (typeof cb !== "function") {
        throw Error(`${cb} is not a function.`);
      }
      this.pipes.push(cb);
    }
    return this;
  }
  
  public process(data) {
    try {
      return this.pipes.reduce((acumm, cb) => cb(acumm), data);
    }
    catch(error) {
      if (this.catchError) {
        this.catchError(error);
        return;
      }
      throw error;
    }
  }
  
  public catch(cb) {
    this.catchError = cb;
    return this;
  }
}
