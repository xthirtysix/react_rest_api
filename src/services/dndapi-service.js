/* eslint-disable no-underscore-dangle */
export default class OpenDndService {
  _apiBase = "https://api.open5e.com";

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${url}, recieved ${res.status}`
      );
    }

    return res.json();
  };

  getRace = async name => {
    const race = await this.getResource(
      `/races/${name.toLowerCase()}`
    );
    return this._changeRace(race);
  };

  getAllRaces = async () => {
    const res = await this.getResource(`/races/`);
    return res.results.map(this._changeRace);
  };

  getClass = async name => {
    const clazz = await this.getResource(
      `/classes/${name.toLowerCase()}`
    );
    return this._changeClass(clazz);
  };

  getAllClasses = async () => {
    const res = await this.getResource(`/classes/`);
    return res.results.map(this._changeClass);
  };

  getSpell = async name => {
    const spell = await this.getResource(`/spells/${name}`);
    return this._changeSpell(spell);
  };

  getAllSpells = async () => {
    const res = await this.getResource(`/spells/`);
    return res.results.map(this._changeSpell);
  };

  _changeSpell = spell => {
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
      description: spell.desc,
    };
  };

  _changeRace = race => {
    const subraces = race.subraces.map(el => {
      return el.name;
    });

    const subracesToShow = subraces.length
      ? subraces.join(", ")
      : "none";

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
        race.vision,
    };
  };

  _changeClass = clazz => {
    const archetypes = clazz.archetypes.map(el => {
      return el.name;
    });

    const archetypesToShow = archetypes.length
      ? archetypes.join(", ")
      : null;

    return {
      name: clazz.name,
      hitDice: clazz.hit_dice,
      hp: clazz.hp_at_1st_level,
      profST: clazz.prof_saving_throws,
      profArmor: clazz.prof_armor,
      profWeapons: clazz.prof_weapons,
      archetypes: archetypesToShow,
      description: `${clazz.desc
        .split(" ")
        .splice(0, 20)
        .join(" ")}...`,
      spellcasting: clazz.spellcasting_ability,
    };
  };
}
