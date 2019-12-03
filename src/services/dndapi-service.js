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
    return res.results;
  };

  getRace(name) {
    return this.getResource(`/races/${name.toLowerCase()}`);
  };

  async getAllClasses() {
    const res = await this.getResource(`/classes/`);
    return res.results;
  };

  getClass(name) {
    return this.getResource(`/classes/${name.toLowerCase()}`);
  };

  async getAllSpells() {
    const res = await this.getResource(`/spells/`);
    return res.results.map((el) => el.slug);
  };

  getSpell(name) {
    return this.getResource(`/spells/${name.toLowerCase()}`);
  };
};
