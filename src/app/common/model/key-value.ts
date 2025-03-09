export class KeyValue<K,V> {
  key: K;
  value: V;

  /*public constructor(o?: Partial<KeyValue<K,V>>) {
    Object.assign(this, o);
  }*/

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }
}
/*

export interface KeyValue<K,V> {
  key: K;
  value: V;

}
*/
