
export class Country {
  private _name: string;
  private _capital: string;
  private _population: number;
  private _area: number;
  private _region: number;
  private _subregion: string;
  private _flag: string;

  constructor(name: string = '', capital: string = '', population: number = 0, area: number = 0, region: number = 0, subregion:string='', flag: string = '') {
    this._name = name;
    this._capital = capital;
    this._population = population;
    this._area = area;
    this._region = region;
    this._subregion = subregion;
    this._flag = flag;
  }


  get name(): string {
    return this._name;
  }

  get capital(): string {
    return this._capital;
  }

  get population(): number {
    return this._population;
  }

  get area(): number {
    return this._area;
  }

  get region(): number {
    return this._region ;
  }

  get subregion(): string {
    return this._subregion;
  }

  get flag(): string {
    return this._flag;
  }
}
