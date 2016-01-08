  $(function() {
//AutoComplete List and Element IDS
    var availableTags = [
	"Items.iron_shovel",
    "Items.iron_pickaxe",
    "Items.iron_axe",
    "Items.flint_and_steel",
    "Items.apple",
    "Items.bow",
    "Items.arrow",
    "Items.coal",
    "Items.diamond",
    "Items.iron_ingot",
    "Items.gold_ingot",
    "Items.iron_sword",
    "Items.wooden_sword",
    "Items.wooden_shovel",
    "Items.wooden_pickaxe",
    "Items.wooden_axe",
    "Items.stone_sword",
    "Items.stone_shovel",
    "Items.stone_pickaxe",
    "Items.stone_axe",
    "Items.diamond_sword",
    "Items.diamond_shovel",
    "Items.diamond_pickaxe",
    "Items.diamond_axe",
    "Items.stick",
    "Items.bowl",
    "Items.mushroom_stew",
    "Items.golden_sword",
    "Items.golden_shovel",
    "Items.golden_pickaxe",
    "Items.golden_axe",
    "Items.string",
    "Items.feather",
    "Items.gunpowder",
    "Items.wooden_hoe",
    "Items.stone_hoe",
    "Items.iron_hoe",
    "Items.diamond_hoe",
    "Items.golden_hoe",
    "Items.wheat_seeds",
    "Items.wheat",
    "Items.bread",
    "Items.leather_helmet",
    "Items.leather_chestplate",
    "Items.leather_leggings",
    "Items.leather_boots",
    "Items.chainmail_helmet",
    "Items.chainmail_chestplate",
    "Items.chainmail_leggings",
    "Items.chainmail_boots",
    "Items.iron_helmet",
    "Items.iron_chestplate",
    "Items.iron_leggings",
    "Items.iron_boots",
    "Items.diamond_helmet",
    "Items.diamond_chestplate",
    "Items.diamond_leggings",
    "Items.diamond_boots",
    "Items.golden_helmet",
    "Items.golden_chestplate",
    "Items.golden_leggings",
    "Items.golden_boots",
    "Items.flint",
    "Items.porkchop",
    "Items.cooked_porkchop",
    "Items.painting",
    "Items.golden_apple",
    "Items.sign",
    "Items.oak_door",
    "Items.spruce_door",
    "Items.birch_door",
    "Items.jungle_door",
    "Items.acacia_door",
    "Items.dark_oak_door",
    "Items.bucket",
    "Items.water_bucket",
    "Items.lava_bucket",
    "Items.minecart",
    "Items.saddle",
    "Items.iron_door",
    "Items.redstone",
    "Items.snowball",
    "Items.boat",
    "Items.leather",
    "Items.milk_bucket",
    "Items.brick",
    "Items.clay_ball",
    "Items.reeds",
    "Items.paper",
    "Items.book",
    "Items.slime_ball",
    "Items.chest_minecart",
    "Items.furnace_minecart",
    "Items.egg",
    "Items.compass",
    "Items.fishing_rod",
    "Items.clock",
    "Items.glowstone_dust",
    "Items.fish",
    "Items.cooked_fish",
    "Items.dye",
    "Items.bone",
    "Items.sugar",
    "Items.cake",
    "Items.bed",
    "Items.repeater",
    "Items.cookie",
    "Items.filled_map",
    "Items.shears",
    "Items.melon",
    "Items.pumpkin_seeds",
    "Items.melon_seeds",
    "Items.beef",
    "Items.cooked_beef",
    "Items.chicken",
    "Items.cooked_chicken",
    "Items.mutton",
    "Items.cooked_mutton",
    "Items.rabbit",
    "Items.cooked_rabbit",
    "Items.rabbit_stew",
    "Items.rabbit_foot",
    "Items.rabbit_hide",
    "Items.rotten_flesh",
    "Items.ender_pearl",
    "Items.blaze_rod",
    "Items.ghast_tear",
    "Items.gold_nugget",
    "Items.nether_wart",
    "Items.potionitem",
    "Items.glass_bottle",
    "Items.spider_eye",
    "Items.fermented_spider_eye",
    "Items.blaze_powder",
    "Items.magma_cream",
    "Items.brewing_stand",
    "Items.cauldron",
    "Items.ender_eye",
    "Items.speckled_melon",
    "Items.spawn_egg",
    "Items.experience_bottle",
    "Items.fire_charge",
    "Items.writable_book",
    "Items.written_book",
    "Items.emerald",
    "Items.item_frame",
    "Items.flower_pot",
    "Items.carrot",
    "Items.potato",
    "Items.baked_potato",
    "Items.poisonous_potato",
    "Items.map",
    "Items.golden_carrot",
    "Items.skull",
    "Items.carrot_on_a_stick",
    "Items.nether_star",
    "Items.pumpkin_pie",
    "Items.fireworks",
    "Items.firework_charge",
    "Items.enchanted_book",
    "Items.comparator",
    "Items.netherbrick",
    "Items.quartz",
    "Items.tnt_minecart",
    "Items.hopper_minecart",
    "Items.armor_stand",
    "Items.iron_horse_armor",
    "Items.golden_horse_armor",
    "Items.diamond_horse_armor",
    "Items.lead",
    "Items.name_tag",
    "Items.command_block_minecart",
    "Items.record_13",
    "Items.record_cat",
    "Items.record_blocks",
    "Items.record_chirp",
    "Items.record_far",
    "Items.record_mall",
    "Items.record_mellohi",
    "Items.record_stal",
    "Items.record_strad",
    "Items.record_ward",
    "Items.record_11",
    "Items.record_wait",
    "Items.prismarine_shard",
    "Items.prismarine_crystals",
    "Items.banner",
     "Blocks.air",
    "Blocks.stone",
    "Blocks.grass",
    "Blocks.dirt",
    "Blocks.cobblestone",
    "Blocks.planks",
    "Blocks.sapling",
    "Blocks.bedrock",
    "Blocks.flowing_water",
    "Blocks.water",
    "Blocks.flowing_lava",
    "Blocks.lava",
    "Blocks.sand",
    "Blocks.gravel",
    "Blocks.gold_ore",
    "Blocks.iron_ore",
    "Blocks.coal_ore",
    "Blocks.log",
    "Blocks.log2",
    "Blocks.leaves",
    "Blocks.leaves2",
    "Blocks.sponge",
    "Blocks.glass",
    "Blocks.lapis_ore",
    "Blocks.lapis_block",
    "Blocks.dispenser",
    "Blocks.sandstone",
    "Blocks.noteblock",
    "Blocks.bed",
    "Blocks.golden_rail",
    "Blocks.detector_rail",
    "Blocks.sticky_piston",
    "Blocks.web",
    "Blocks.tallgrass",
    "Blocks.deadbush",
    "Blocks.piston",
    "Blocks.piston_head",
    "Blocks.wool",
    "Blocks.piston_extension",
    "Blocks.yellow_flower",
    "Blocks.red_flower",
    "Blocks.brown_mushroom",
    "Blocks.red_mushroom",
    "Blocks.gold_block",
    "Blocks.iron_block",
    "Blocks.double_stone_slab",
    "Blocks.stone_slab",
    "Blocks.brick_block",
    "Blocks.tnt",
    "Blocks.bookshelf",
    "Blocks.mossy_cobblestone",
    "Blocks.obsidian",
    "Blocks.torch",
    "Blocks.fire",
    "Blocks.mob_spawner",
    "Blocks.oak_stairs",
    "Blocks.chest",
    "Blocks.redstone_wire",
    "Blocks.diamond_ore",
    "Blocks.diamond_block",
    "Blocks.crafting_table",
    "Blocks.wheat",
    "Blocks.farmland",
    "Blocks.furnace",
    "Blocks.lit_furnace",
    "Blocks.standing_sign",
    "Blocks.oak_door",
    "Blocks.spruce_door",
    "Blocks.birch_door",
    "Blocks.jungle_door",
    "Blocks.acacia_door",
    "Blocks.dark_oak_door",
    "Blocks.ladder",
    "Blocks.rail",
    "Blocks.stone_stairs",
    "Blocks.wall_sign",
    "Blocks.lever",
    "Blocks.stone_pressure_plate",
    "Blocks.iron_door",
    "Blocks.wooden_pressure_plate",
    "Blocks.redstone_ore",
    "Blocks.lit_redstone_ore",
    "Blocks.unlit_redstone_torch",
    "Blocks.redstone_torch",
    "Blocks.stone_button",
    "Blocks.snow_layer",
    "Blocks.ice",
    "Blocks.snow",
    "Blocks.cactus",
    "Blocks.clay",
    "Blocks.reeds",
    "Blocks.jukebox",
    "Blocks.oak_fence",
    "Blocks.spruce_fence",
    "Blocks.birch_fence",
    "Blocks.jungle_fence",
    "Blocks.dark_oak_fence",
    "Blocks.acacia_fence",
    "Blocks.pumpkin",
    "Blocks.netherrack",
    "Blocks.soul_sand",
    "Blocks.glowstone",
    "Blocks.portal",
    "Blocks.lit_pumpkin",
    "Blocks.cake",
    "Blocks.unpowered_repeater",
    "Blocks.powered_repeater",
    "Blocks.trapdoor",
    "Blocks.monster_egg",
    "Blocks.stonebrick",
    "Blocks.brown_mushroom_block",
    "Blocks.red_mushroom_block",
    "Blocks.iron_bars",
    "Blocks.glass_pane",
    "Blocks.melon_block",
    "Blocks.pumpkin_stem",
    "Blocks.melon_stem",
    "Blocks.vine",
    "Blocks.oak_fence_gate",
    "Blocks.spruce_fence_gate",
    "Blocks.birch_fence_gate",
    "Blocks.jungle_fence_gate",
    "Blocks.dark_oak_fence_gate",
    "Blocks.acacia_fence_gate",
    "Blocks.brick_stairs",
    "Blocks.stone_brick_stairs",
    "Blocks.mycelium",
    "Blocks.waterlily",
    "Blocks.nether_brick",
    "Blocks.nether_brick_fence",
    "Blocks.nether_brick_stairs",
    "Blocks.nether_wart",
    "Blocks.enchanting_table",
    "Blocks.brewing_stand",
    "Blocks.cauldron",
    "Blocks.end_portal",
    "Blocks.end_portal_frame",
    "Blocks.end_stone",
    "Blocks.dragon_egg",
    "Blocks.redstone_lamp",
    "Blocks.lit_redstone_lamp",
    "Blocks.double_wooden_slab",
    "Blocks.wooden_slab",
    "Blocks.cocoa",
    "Blocks.sandstone_stairs",
    "Blocks.emerald_ore",
    "Blocks.ender_chest",
    "Blocks.tripwire_hook",
    "Blocks.tripwire",
    "Blocks.emerald_block",
    "Blocks.spruce_stairs",
    "Blocks.birch_stairs",
    "Blocks.jungle_stairs",
    "Blocks.command_block",
    "Blocks.beacon",
    "Blocks.cobblestone_wall",
    "Blocks.flower_pot",
    "Blocks.carrots",
    "Blocks.potatoes",
    "Blocks.wooden_button",
    "Blocks.skull",
    "Blocks.anvil",
    "Blocks.trapped_chest",
    "Blocks.light_weighted_pressure_plate",
    "Blocks.heavy_weighted_pressure_plate",
    "Blocks.unpowered_comparator",
    "Blocks.powered_comparator",
    "Blocks.daylight_detector",
    "Blocks.daylight_detector_inverted",
    "Blocks.redstone_block",
    "Blocks.quartz_ore",
    "Blocks.hopper",
    "Blocks.quartz_block",
    "Blocks.quartz_stairs",
    "Blocks.activator_rail",
    "Blocks.dropper",
    "Blocks.stained_hardened_clay",
    "Blocks.barrier",
    "Blocks.iron_trapdoor",
    "Blocks.hay_block",
    "Blocks.carpet",
    "Blocks.hardened_clay",
    "Blocks.coal_block",
    "Blocks.packed_ice",
    "Blocks.acacia_stairs",
    "Blocks.dark_oak_stairs",
    "Blocks.slime_block",
    "Blocks.double_plant",
    "Blocks.stained_glass",
    "Blocks.stained_glass_pane",
    "Blocks.prismarine",
    "Blocks.sea_lantern",
    "Blocks.standing_banner",
    "Blocks.wall_banner",
    "Blocks.red_sandstone",
    "Blocks.red_sandstone_stairs",
    "Blocks.double_stone_slab2",
    "Blocks.stone_slab2"
    ];

    $( "#3x3output" ).autocomplete({

      source: availableTags

    });

	$( "#3x3in1" ).autocomplete({

      source: availableTags

    });

	$( "#3x3in2" ).autocomplete({

      source: availableTags

    });

	$( "#3x3in3" ).autocomplete({

      source: availableTags

    });

	$( "#3x3in4" ).autocomplete({

      source: availableTags

    });

	$( "#3x3in5" ).autocomplete({

      source: availableTags

    });

	$( "#3x3in6" ).autocomplete({

      source: availableTags

    });

	$( "#3x3in7" ).autocomplete({

      source: availableTags

    });

	$( "#3x3in8" ).autocomplete({

      source: availableTags

    });

	$( "#3x3in9" ).autocomplete({

      source: availableTags

    });

	$( "#2x2output" ).autocomplete({

      source: availableTags

    });

	$( "#2x2in1" ).autocomplete({

      source: availableTags

    });

	$( "#2x2in2" ).autocomplete({

      source: availableTags

    });

	$( "#2x2in3" ).autocomplete({

      source: availableTags

    });

	$( "#2x2in4" ).autocomplete({

      source: availableTags

    });

	 $( "#shapelessOutput" ).autocomplete({

      source: availableTags

    });

	$( "#shapelessIn1" ).autocomplete({

      source: availableTags

    });

	$( "#shapelessIn2" ).autocomplete({

      source: availableTags

    });

	$( "#shapelessIn3" ).autocomplete({

      source: availableTags

    });

	$( "#shapelessIn4" ).autocomplete({

      source: availableTags

    });

	$( "#shapelessIn5" ).autocomplete({

      source: availableTags

    });

	$( "#shapelessIn6" ).autocomplete({

      source: availableTags

    });

	$( "#shapelessIn7" ).autocomplete({

      source: availableTags

    });

	$( "#shapelessIn8" ).autocomplete({

      source: availableTags

    });

	$( "#shapelessIn9" ).autocomplete({

      source: availableTags

    });

    $( "#oredrop" ).autocomplete({

      source: availableTags

    });

    $( "#smeltInput" ).autocomplete({

      source: availableTags

    });

    $( "#smeltOutput" ).autocomplete({

      source: availableTags

    });


  });