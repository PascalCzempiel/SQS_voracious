function stringToHash(s: string) {             
    let hash = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
     
    return hash;
}

class Entity {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly size: number
    ){}

    getHash(): number {
        return Math.abs(stringToHash(this.name));
    }
}

export default Entity;