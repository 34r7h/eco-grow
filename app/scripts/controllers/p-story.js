'use strict';

angular.module('EcossentialsApp')
  .controller('PStoryCtrl', function ($scope) {
   
    $scope.suppliers = [
    	{name:'Jo’Mamma',type:'Clothing'},
    	{name:'Live Ta Dye',type:'Clothing'},
    	{name:'Jalu',type:'Wooden Toys'},
    	{name:'Wool & Moose',type:'Wool Felt Toy Food'},
    	{name:'Powell river Natural Soap Lady',type:'Soaps and Incense'},
    	{name:'Urban Earth',type:'Loose Leaf Teas'},
    	{name:'Hatch-A-Bird-Farm',type:'Responsibly Grown Produce and Eggs'},
    	{name:'Tree Island',type:'Yogurt'},
    	{name:'Natural Pastures',type:'Cheeses'},
    	{name:'Island Bison',type:'Bison Meat Products'},
    	{name:'One Tree Farm',type:'Organic Eggs and Greenhouse Cucumbers'},
    	{name:'Cynthia’s',type:'Bees` Wax Candles'},
    	{name:'Deb Zagwyn',type:'Written and Iluustrated Children’s Books'},
    	{name:'Silver Selkie Studio',type:'Jewelry, Fiber Arts, Craft Supplies & Kits'},
    	{name:'KLK',type:'Jewelry'},
    	{name:'Midori Essences',type:'Face Serum'},
    	{name:'Kootenay Bath Products',type:'Personal Care Products'},
    	{name:'Kairos Botanicals',type:'Tinctures and Tonics'},
    	{name:'Moon Ray',type:'Personal Care Products'},
    	{name:'Island Soda Works',type:'Natural Soda Pop'},
    	{name:'Fredrichs',type:'Honey and Bee Pollen'},
    	{name:'Woodwitch Wildcrafts',type:'Teas, Tinctures, and Salves'},
    	{name:'John’s Bee Goods',type:'Balms and Salves'},
    	{name:'Little Wing',type:'Soy and Bees` Wax Candles'},
    	{name:'Janet’s Happy Place',type:'One-Of-A-Kind Greeting Cards, Notebooks, and Wine Charms'},
    	{name:'Hankettes',type:'Organic Cotton Hankerchiefs, Coffee Filters, Tea Bags, and More'},
    	{name:'Mountain Ash Preserves',type:'Jams, Pickles, Salsas, Assorted Preserves'},
    	{name:'Blitz Beach House',type:'Cedar Grilling Planks and Appy Planks'},
    	{name:'Wild Westcoast Rainforest Products',type:'Jams, Preserves, Sauces, Kale Chips'},
    	{name:'The Art Bump',type:'Jewelry, Re-Purposed Craft Supplies, Toys, Journals'},
    	{name:'Moe’s',type:'Hemp Power Bars, Kettle and Caramel Corn'},
    	{name:'Turtle Granny',type:'Greeting Cards, Jewelry, Felted Accessories, Art Magnets'},
    	{name:'Periwinkle Granary',type:'Freshly Milled Flours and Baking Mixes'},
    	{name:'Hibou',type:'Unique Upcycled Bags and Purses'},
    	{name:'Sacred Charge',type:'Salvaged Feather Jewelry'},
    	{name:'Various Local Artists',type:'Music CDs and Books'},
    	{name:'Velma’s',type:'Organic Caramels, Brown Sugar Keepers, Goats’ Milk Soaps'},
    	{name:'Hodgins’ Farm',type:'Assorted Produce'}
    ]

    $scope.newItems = {
    	kitchen: [
    		{name:'Range', cost:3000},
    		{name:'Hood Fan', cost:1000},
    		{name:'Dishwasher', cost:5000},
    		{name:'Prep Table with Undercounter Refridgerators', cost:2860},
    		{name:'Convection Oven', cost:4000},
    		{name:'Prep Tables', cost:1000},
    		{name:'Counter-top Display Pastry Case', cost:1000},
    		{name:'Counter-top Beverage Cooler', cost:800},
    		{name:'Coffee Brewer', cost:2500},
    		{name:'Coffee Machine', cost:2500},
    		{name:'Cooking Pots, Pans & Utensils', cost:1000},
    		{name:'Tables & Chairs', cost:3000},
    		{name:'Tableware', cost:1500},
    		{name:'Accessories', cost:1000}
    	],
    	juicebar: [
    		{name:'Blenders x 2', cost:1000},
    		{name:'Juicers', cost:1000},
    		{name:'Prep Table', cost:2000},
    		{name:'Freezer', cost:1000},
    		{name:'Refridgerated Case', cost:1000}
    	],
    	store: [
    		{name:'POS Station x 2', cost:10000},
    		{name:'Scale x 2', cost:3000},
    		{name:'Software', cost:1000},
    		{name:'Sage 50 Upgrade', cost:200},
    		{name:'Nut Butter Grinder x 2', cost:5000},
    		{name:'Coffee Grinder', cost:750},
    		{name:'Walk-in Cooler', cost:6000},
    		{name:'8ft Produce Case x 2', cost:10000},
    		{name:'3 Door Freezer', cost:3500},
    		{name:'8ft Merchandise Case x 2', cost:10000},
    		{name:'Retail Display Racks & Fixtures', cost:2000},
    		{name:'Display Boxes', cost:2000},
    		{name:'Millwork', cost:5000},
    		{name:'Cash Desks', cost:1000}
    	],
    	reno: [
    		{name:'Lighting', cost:1000},
    		{name:'Stairs', cost:2000},
    		{name:'Paint', cost:500},
    		{name:'Windows', cost:2000},
    		{name:'Flooring', cost:10000},
    		{name:'Change Rooms', cost:400},
    		{name:'New Walls', cost:2000},
    	],
    	misc: [
    		{name:'Unknowns', cost:5000},
    		{name:'Extra Stock Items', cost:10000}
    	]
    }

    $scope.budget = [
    	{type:"Renovations", cost:20000},
    	{type:"Store Equipment and Fixtures", cost:60000},
    	{type:"Commercial Kitchen and Juice Bar", cost:35000},
    	{type:"Extra Stock to Fill Bigger Space", cost:10000}
    ]
    
  });
