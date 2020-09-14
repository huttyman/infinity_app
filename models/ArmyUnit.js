class ArmyUnit {
    constructor(title, attribute, mainGunName,UnitAttribute) {
        this.title = title;
        this.attribute = new UnitAttribute(mov, cc, bs, ph, wip, arm, bts, w, s, ava);
        this.mainGunName = mainGunName;
    }
}



class UnitAttribute {
    constructor(mov, cc, bs, ph, wip, arm, bts, w, s, ava){
            this.mov = mov;
            this.cc = cc;
            this.bs = bs;
            this.ph = ph;
            this.wip = wip;
            this.arm = arm;
            this.bts = bts;
            this.w = w;
            this.s = s;
            this.ava = ava;
    }
}

class Weapon {
    constructor(){
        this.title = title;
        
    }
}