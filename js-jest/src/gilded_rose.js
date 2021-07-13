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
                this.updateBackstagePassQuality(item);
            } else {
                var qualityDecreasePerDay = 1;
                if (item.name == "Aged Brie") {
                    qualityDecreasePerDay *= -1;
                }
                if (item.name.startsWith("Conjured")) {
                    qualityDecreasePerDay *= 2;
                }
                if (item.sellIn < 0) {
                    item.quality -= 2 * qualityDecreasePerDay;
                } else {
                    item.quality -= qualityDecreasePerDay;
                }
            }

            item.sellIn -= 1;
            if (item.quality < 0) item.quality = 0;
            if (item.quality > 50) item.quality = 50;
        }

        return this.items;
    }

    updateBackstagePassQuality(item) {
        if (item.sellIn > 10) {
            item.quality += 1;
        } else if (item.sellIn > 5) {
            item.quality += 2;
        } else if (item.sellIn > 0) {
            item.quality += 3;
        } else {
            item.quality = 0;
        }
    }
}

module.exports = {
    Item,
    Shop,
};
