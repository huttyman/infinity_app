import ArmyUnit from '../models/ArmyUnit';
import Colors from '../templates/Colors';



export const ARMY_UNIT = [
    {
        id: '1',
        title: 'Fusiliers',
        attribute: {
            mov: '4-4',
            cc: '13',
            bs: '12',
            ph: '10',
            wip: '12',
            arm: '1',
            bts: '0',
            w: '1',
            s: '2',
            ava: 'T',
        },
        unitList: [
            {
                unitSetId:'1'
            },
            {
                unitSetId:'2'
            },
            {
                unitSetId:'3'
            },
            {
                unitSetId:'4'
            },
            {
                unitSetId:'5'
            },
            {
                unitSetId:'6'
            },
            {
                unitSetId:'7'
            },

        ],
    },
    {
        id: '2',
        title: 'Nokken',
        attribute: {
            mov: '4-4',
            cc: '13',
            bs: '12',
            ph: '10',
            wip: '13',
            arm: '2',
            bts: '3',
            w: '1',
            s: '2',
            ava: '2',
        },
        unitList: [
            {
                unitSetId:'8'
            },
            {
                unitSetId:'9'
            },
            {
                unitSetId:'10'
            },
        ],

    },
];

export const SKILL = [
    {
        id: '1',
        title: 'Paramedic',
    },
    {
        id: '2',
        title: 'Lieutenant',
    },
    {
        id: '3',
        title: 'Hacker'
    }
];

export const EQUIPMENT = [
    {
        id: '1',
        title: 'MedKit',
    },
    {
        id: '2',
        title: 'Hacking Device',
    },
    {
        id: '3',
        title: 'Multispectral Visor L1',
    }
];



//Type: main, sub, close
export const WEAPON = [
    {
        id: '1',
        title: 'CombiRifle',
        tyle: 'main',
        attribute: {
            dam: '13',
            b: '3',
            ammo: 'N',
            save: 'arm',
            range: {
                short_range: '0-8"',
                short_mod: '-3',
                medium_range: '8-16"',
                medium_mod: '+3',
                long_range: '16-32"',
                long_mod: '-3',
                max_range: '32-48"',
                max_mod: '-6'
            }
        },
    },
    {
        id: '2',
        title: 'Spitfire',
        tyle: 'main',
        attribute: {
            dam: '14',
            b: '4',
            ammo: 'N',
            save: 'ARM',
            range: {
                short_range: '0-8"',
                short_mod: '0',
                medium_range: '8-24"',
                medium_mod: '+3',
                long_range: '24-32"',
                long_mod: '-3',
                max_range: '32-48"',
                max_mod: '-6'
            },
        },
    },
    {
        id: '3',
        title: 'Pistol(CC Mode)',
        tyle: 'sub',
        attribute: {
            dam: '11',
            b: '1',
            ammo: 'N',
            save: '--',
            range: {
                no_range: true
            },
        },
        trait: 'CC'

    },
    {
        id: '4',
        title: 'CC Weapon',
        tyle: 'close',
        attribute: {
            dam: 'PH',
            b: '1',
            ammo: 'N',
            save: 'ARM',
            range: {
                no_range: true
            },
        },
        trait: 'CC'

    },
    {
        id: '5',
        title: 'Missile Launcher (Blast Mode)',
        tyle: 'main',
        attribute: {
            dam: '14',
            b: '1',
            ammo: 'AP+Exp',
            save: 'ARM',
            range: {
                short_range: '0-8"',
                short_mod: '-3',
                medium_range: '8-24"',
                medium_mod: '0',
                long_range: '24-40"',
                long_mod: '+3',
                max_range: '40-96"',
                max_mod: '-3'
            },
        },
    },
    {
        id: '6',
        title: 'MULTI Sniper (Burst Mode)',
        tyle: 'main',
        attribute: {
            dam: '15',
            b: '2',
            ammo: 'AP',
            save: 'ARM',
            range: {
                short_range: '0-8"',
                short_mod: '-3',
                medium_range: '8-16"',
                medium_mod: '0',
                long_range: '16-48"',
                long_mod: '+3',
                max_range: '48-96"',
                max_mod: '-3'
            },
        },
    },
    {
        id: '7',
        title: 'MULTI Sniper (Anti-meteriel Mode)',
        tyle: 'main',
        attribute: {
            dam: '15',
            b: '1',
            ammo: 'DA',
            save: 'ARM',
            range: {
                short_range: '0-8"',
                short_mod: '-3',
                medium_range: '8-16"',
                medium_mod: '0',
                long_range: '16-48"',
                long_mod: '+3',
                max_range: '48-96"',
                max_mod: '-3'
            },
        },
    },
    {
        id: '8',
        title: 'HMG',
        tyle: 'main',
        attribute: {
            dam: '15',
            b: '4',
            ammo: 'N',
            save: 'ARM',
            range: {
                short_range: '0-8"',
                short_mod: '-3',
                medium_range: '8-16"',
                medium_mod: '0',
                long_range: '16-32"',
                long_mod: '+3',
                max_range: '32-48"',
                max_mod: '-3'
            },
        },
    },
    {
        id: '9',
        title: 'Boarding Shotgun (Blast Mode)',
        tyle: 'main',
        attribute: {
            dam: '14',
            b: '2',
            ammo: 'N',
            save: 'ARM',
            range: {
                no_range: true
            },
        },
        trait: 'Direct Template (Small Teardrop)',
    },
    {
        id: '10',
        title: 'Boarding Shotgun (Hit Mode)',
        tyle: 'main',
        attribute: {
            dam: '14',
            b: '2',
            ammo: 'AP',
            save: 'ARM',
            range: {
                short_range: '0-8"',
                short_mod: '+6',
                medium_range: '8-16"',
                medium_mod: '0',
                long_range: '16-24"',
                long_mod: '-3',
            },
        },
    },
    {
        id: '11',
        title: 'Light Shotgun (Blast Mode)',
        tyle: 'main',
        attribute: {
            dam: '13',
            b: '2',
            ammo: 'N',
            save: 'ARM',
            range: {
                no_range: true
            },
        },
        trait: 'Direct Template (Small Teardrop)',
    },
    {
        id: '12',
        title: 'Boarding Shotgun (Hit Mode)',
        tyle: 'main',
        attribute: {
            dam: '14',
            b: '2',
            ammo: 'N',
            save: 'ARM',
            range: {
                short_range: '0-8"',
                short_mod: '+6',
                medium_range: '8-16"',
                medium_mod: '0',
                long_range: '16-24"',
                long_mod: '-3',
                max_range: '',
                max_mod: '',
            },
        },
    },
    {
        id: '13',
        title: 'Spitfire',
        tyle: 'main',
        attribute: {
            dam: '14',
            b: '4',
            ammo: 'N',
            save: 'ARM',
            range: {
                short_range: '0-8"',
                short_mod: '+0',
                medium_range: '8-24"',
                medium_mod: '+3',
                long_range: '24-32"',
                long_mod: '-3',
                max_range: '32-48"',
                max_mod: '-6',
            },
        },
    },
];

export const UNITSET = [
    {
        id:'1',
        gunList: ['1', '3', '4'],
        skillList: [],
        equipmentList: [],
        swc: 0,
        point: 1
    },
    {
        id:'2',
        gunList: ['5', '3', '4'],
        skillList: [],
        equipmentList: [],
        swc: 1.5,
        point: 1
    },
    {
        id:'3',
        gunList: ['1', '3', '4'],
        swc: 0,
        point: 1,
        skillList: ['1'],
        equipmentList: ['1'],
    },
    {
        id:'4',
        gunList: ['1', '3', '4'],
        swc: 0,
        point: 1,
        skillList: ['3'],
        equipmentList: ['2'],
    },
    {
        id:'5',
        gunList: ['1', '3', '4'],
        swc: 0,
        point: 1,
        skillList: ['2'],
        equipmentList: [],
    },
    {
        id:'6',
        gunList: ['8', '3', '4'],
        skillList: [],
        equipmentList: [],
        swc: 1,
        point: 1.5,
    },
    {
        id:'7',
        gunList: ['6', '7', '3', '4'],
        skillList: [],
        equipmentList: [],
        swc: 1.5,
        point: 1.5,
    },
    {
        id:'8',
        gunList: ['9','10', '3', '4'],
        skillList: [],
        swc: 0,
        point: 2,
        equipmentList: ['3'],
    },
    {
        id:'9',
        gunList: ['13', '3', '4'],
        skillList: [],
        equipmentList: [],
        swc: 1.5,
        point: 2.5,
    },
    {
        id:'10',
        gunList: ['1','11','12', '3', '4'],
        swc: 0,
        point: 1,
        skillList: ['3'],
        equipmentList: ['2'],
    },
    {
        id:'11',
    },
    {
        id:'12',
    },
    {
        id:'13',
    },
    {
        id:'14',
    },
    {
        id:'15',
    },
    {
        id:'16',
    },
    {
        id:'17',
    },
    {
        id:'18',
    },
    {
        id:'19',
    },
    {
        id:'20',
    },
    {
        id:'21',
    },
    {
        id:'22',
    },
    {
        id:'23',
    },

];
