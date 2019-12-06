export default class openDndService {
  _apiBase = 'https://api.open5e.com'

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
    };

    return await res.json();
  };

  async getAllRaces() {
    const res = await this.getResource(`/races/`);
    return res.results.map(this._changeRace);
  };

  async getRace(name) {
    const race = await this.getResource(`/races/${name.toLowerCase()}`);
    return this._changeRace(race);
  };

  async getAllSpells() {
    const res = await this.getResource(`/spells/`);
    return res.results.map(this._changeSpell);
  };

  async getSpell(name) {
    const spell = await this.getResource(`/spells/${name}`);
    return this._changeSpell(spell);
  };

  _changeSpell = (spell) => {
    return {
      url: spell.slug,
      name: spell.name,
      level: spell.level,
      school: spell.school,
      classes: spell.dnd_class,
      range: spell.range,
      castingTime: spell.casting_time,
      duration: spell.duration,
      components: spell.components,
      description: spell.desc
    };
  };

  _changeRace = (race) => {
    const subraces = race.subraces.map(el => {
      return el.name
    });

    const subracesToShow = subraces.legth > 0 ? subraces.join(', ') : 'none';

    return {
      name: race.name,
      size: race.size.split(" ").splice(-1),
      speed: race.speed.walk,
      subraces: subracesToShow,
      desc:
        race.desc +
        race.age +
        race.alignment +
        race.traits +
        race.vision
    };
  };
}; 
