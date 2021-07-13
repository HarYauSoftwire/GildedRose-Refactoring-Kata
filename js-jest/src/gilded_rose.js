class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class Shop {
    constructor(items = []) {
        this.items = items;
    }
    updateQuality() {
        for (var item of this.items) {
            if (item.name == "Sulfuras, Hand of Ragnaros") {
                continue;
            }
            if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
                if (item.sellIn <= 0) {
                    item.quality = 0;
                } else if (item.sellIn <= 5) {
                    item.quality += 3;
                } else if (item.sellIn <= 10) {
                    item.quality += 2;
                } else {
                    item.quality += 1;
                }
                item.sellIn = item.sellIn - 1;
                continue;
            }
            if (item.name != "Aged Brie") {
                if (item.quality > 0) {
                    item.quality = item.quality - 1;
                }
            } else {
                if (item.quality < 50) {
                    item.quality = item.quality + 1;
                }
            }
            item.sellIn = item.sellIn - 1;
            if (item.sellIn < 0) {
                if (item.name != "Aged Brie") {
                    if (item.quality > 0) {
                        item.quality = item.quality - 1;
                    }
                } else {
                    if (item.quality < 50) {
                        item.quality = item.quality + 1;
                    }
                }
            }
        }

        return this.items;
    }
}

module.exports = {
    Item,
    Shop,
};
