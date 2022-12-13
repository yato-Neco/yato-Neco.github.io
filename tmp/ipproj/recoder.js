export default class RecorderNode extends AudioWorkletNode {
    constructor(audioCtx){
      super(audioCtx, 'recorder-processor');
      this.buffers = []; //processorから受け取ったFloat32Arrayを貯める
      this.port.onmessage = e => this.buffers.push(e.data);
    }
  
    //Float32Arrayの配列を繋げて新しいFloat32Arrayを返す
    mergeBuffers(buffers){
      const sampleLength = buffers.reduce((acc, buf) => acc + buf.length, 0);
      //console.log(buffers);
      const samples = new Float32Array(sampleLength);
      let sampleIdx = 0;
      for (let i = 0; i < buffers.length; i++) {
        for (let j = 0; j < buffers[i].length; j++) {
            samples[sampleIdx] = buffers[i][j];
          sampleIdx++;
        }
      }
  
      return samples;
    }
  
    //this.buffersを繋げたFloat32Arrayを取得
    getData(){
      const samples = this.mergeBuffers(this.buffers);
      this.buffers = [];
      console.log(samples);
      return samples;
    }
  }