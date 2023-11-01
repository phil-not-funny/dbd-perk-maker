export function writeProps(object: any) {
  console.log(object);
  
  return {
    download: true,
    href:
      "data:text/plain;charset=utf-8," +
      encodeURIComponent(JSON.stringify(object)),
  };
}

export function readFile() {

}

export function loadPerks() {}
