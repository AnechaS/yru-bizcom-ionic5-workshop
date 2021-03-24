interface Filter {
  [key: string]: any;
}

interface Item extends Filter {
  id: string;
  name: string;
  gender: 'male' | 'female';
}

export default class People {
  private data: Array<Item> = [
    {
      id: '1',
      name: 'Somchai Gigi',
      gender: 'male',
    },
    {
      id: '2',
      name: 'Nanah Hoo',
      gender: 'female',
    },
  ];

  public find(query: Filter = {}): Array<Item> {
    if (!Object.keys(query)) {
      return this.data;
    }

    let results = [];

    for (const item of this.data) {
      let isMatch = true;

      for (const key in query) {
        if (typeof item[key] !== 'undefined') {
          if (item[key] !== query[key]) {
            isMatch = false;
            break;
          }
        }
      }

      if (isMatch) {
        results.push(item);
      }
    }

    return results;
  }

  public get(id: string): Item | undefined {
    return this.find({ id })[0];
  }
}
