const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
    it("should foo", function () {
        const gildedRose = new Shop([new Item("foo", 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("foo");
    });

    it("should decrease the SellIn date", function () {
        const gildedRose = new Shop([new Item("foo", 30, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(29);
    });

    it("should decrease the Quality", function () {
        const gildedRose = new Shop([new Item("foo", 30, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(29);
    });

    it("should decrease the Quality by 2 after the sell-by date has passed", function () {
        const gildedRose = new Shop([new Item("foo", -30, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(28);
    });

    it("should not decrease the Quality if the Quality is 0", function () {
        const gildedRose = new Shop([new Item("foo", 30, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(0);
    });

    it("should not decrease the Quality past 0 to a negative number", function () {
        const gildedRose = new Shop([new Item("foo", -30, 1)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(0);
    });

    it("should increase the Quality of Aged Brie", function () {
        const gildedRose = new Shop([new Item("Aged Brie", 30, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(31);
    });

    it("should increase the Quality of Aged Brie by 2 past its sell-by date", function () {
        const gildedRose = new Shop([new Item("Aged Brie", -30, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(32);
    });

    it("should not increase the Quality of Aged Brie past 50", function () {
        const gildedRose = new Shop([new Item("Aged Brie", 30, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(50);
    });

    it("should not decrease the SellIn of Sulfuras", function () {
        const gildedRose = new Shop([
            new Item("Sulfuras, Hand of Ragnaros", 30, 80),
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(80);
    });

    it("should not decrease the Quality of Sulfuras", function () {
        const gildedRose = new Shop([
            new Item("Sulfuras, Hand of Ragnaros", 30, 80),
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(80);
    });

    it("should increase the Quality of the Backstage passes", function () {
        const gildedRose = new Shop([
            new Item("Backstage passes to a TAFKAL80ETC concert", 30, 10),
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(11);
    });

    it("should increase the Quality of the Backstage passes by 2 when there are 10 days or less", function () {
        const gildedRose = new Shop([
            new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(12);
    });

    it("should increase the Quality of the Backstage passes by 3 when there are 5 days or less", function () {
        const gildedRose = new Shop([
            new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10),
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(13);
    });

    it("should drop the Quality of the Backstage passes to 0 after the sell-by date", function () {
        const gildedRose = new Shop([
            new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10),
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(0);
    });

    it("should decrease the Quality of Conjured by 2", function () {
        const gildedRose = new Shop([new Item("Conjured", 30, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(28);
    });

    it("should decrease the Quality of Conjured by 4 when past the sell-by date", function () {
        const gildedRose = new Shop([new Item("Conjured", -30, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(26);
    });
});
