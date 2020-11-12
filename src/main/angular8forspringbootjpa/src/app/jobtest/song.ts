class Song {
    name;
    nextSong;
    
    constructor(name) {
      this.name = name;
    }
    
    /**
     * @return {boolean} true if the playlist is repeating, false if not.
     */
    isRepeatingPlaylist() {
        let i = this;
        let mp = new Set();
        while (i != null) {
            if (mp.has(i)) return true;
  
            mp.add(i);
            i = i.nextSong;  
        }
  
        return false;
   }
  }
  
  let first = new Song("Hello");
  let second = new Song("Eye of the tiger");
  
  first.nextSong = second;
  second.nextSong = first;
  
  console.log(first.isRepeatingPlaylist());