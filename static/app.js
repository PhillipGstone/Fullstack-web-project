function darkmodetoggle() {
    let element = document.body;  // Variable . Looking at the base and picking body.
    let mainbox = document.getElementsByClassName("main-box");
    let mainText = document.getElementsByClassName("main-text");
    let state = localStorage.getItem("state");

    element.classList.toggle("dark-mode"); // using Veribale then toggle what we called it on .html page. Don't forget to link it tho.

    for (const box of mainbox) {
        box.classList.toggle("dark-mode-b");  
    }

    for (const text of mainText) {
        text.classList.toggle("dark-mode-b");
    }

    if (state !=="dark") {
        localStorage.setItem("state", "dark"); 
    } else {
        localStorage.setItem("state", "light"); 
    }
}

function darkCheck() {
    let element = document.body;  
    let mainbox = document.getElementsByClassName("main-box");
    let mainText = document.getElementsByClassName("main-text");
    let state = localStorage.getItem("state")

    if (state =="dark") {
        element.classList.toggle("dark-mode");  
    

        for (const box of mainbox) {
            box.classList.toggle("dark-mode-b");  
        }
    
        for (const text of mainText) {
            text.classList.toggle("dark-mode-b");
        }
    }
}

let counter = 0
function diffText() {
    
    if (counter == 0){
    text = "Cost: 56,978,180 CR. <br> Landing Pad: Medium. <br> pilot Seats: 2. <br> Hull Mass: 350t. <br> Armour: 468. <br> Shields: 294 MJ. <br> Fuel capacity: 32t. <br> HARDPOINTS: <br> 4x utillity mounts.  2x Medium hardpoints.  3x Large hardpoints. <br> INTERNAL COMPARTMENTS: <br> 1x class 1 compartment.  1x class 2 compartment.  2x class 3 compartments.  1x class 4 compartment.  2x class 5 compartments.  3x class 6 compartments." 
    document.getElementById("pythontext").innerHTML = text;
    counter = 1
    }else {
        text = "The Python is considered by some to be the most effective balance between firepower, manoeuvrability, and protection currently available among all ships. In addition to ably holding its own against the larger Anaconda in a one-on-one battle through its substantial protection and firepower, the Python is generally agile enough for its size to comfortably deal with smaller combat ships without having to rely on turret mounts. The Python can also serve as a heavily armed freighter in that it can carry 284 T of cargo with a Class 3 Shield Generator fitted, or 292 T with no shield fitted. Additionally, it is the largest cargo capacity of any ship that can dock at Outposts since it utilizes medium landing pads; because of this the Python is fantastic for Community Goals. Although the ship can achieve surprisingly high jump ranges with the proper modules and Engineering, additional mass from cargo can quickly drag this down and significantly lengthen the return leg of a trading loop." 
    document.getElementById("pythontext").innerHTML = text;
    counter = 0
    }}


function diffTextb() {
    if (counter == 0){
    text = "Cost: 19,382,250 CR. <br> Landing Pad: Medium. <br> pilot Seats: 2. <br> Hull Mass: 400t. <br> Armour: 504. <br> Shields: 162 MJ. <br> Fuel capacity: 16t. <br> HARDPOINTS: <br> 4x utillity mounts. 3x small Hardpoints  1x Medium hardpoint.  2x Large hardpoints. <br> INTERNAL COMPARTMENTS: <br> 1x class 1 compartment.  2x class 2 compartments.  1x class 4 compartment.  1x class 5 compartment.  1x class 6 compartments.  3x class 4 Military compartments." 
    document.getElementById("chieftaintext").innerHTML = text;
    counter = 1
    }else{text = "The Alliance Chieftain is very competitively priced, at only 19 million credits it is significantly cheaper than other heavy fighters or multipurpose ships like the Python, Federal Gunship, Imperial Clipper, Krait MkII, Krait Phantom, and Fer-de-Lance, while offering similar capabilities. The ship also features many internal compartments, allowing the pilot to equip a shield cell bank, hull reinforcements or module reinforcements.   The Chieftain performs very well against its intended match-up, the Thargoid Interceptor. It is capable of equipping the maximum of 4 Anti-Xeno hardpoints and has enough utility and internal space for countermeasures. Finally, the mobility lets it handle Thargon Swarms easily as it can keep a Remote Release Flak Launcher on its target. It is even capable of soloing Thargoid Interceptors in the right hands." 
    document.getElementById("chieftaintext").innerHTML = text;
    counter = 0
    }}

    function diffTextc() {
        if (counter == 0){
        text = "Cost: 6,661,153 CR. <br> Landing Pad: Medium. <br> pilot Seats: 2. <br> Hull Mass: 280t. <br> Armour: 378. <br> Shields: 152 MJ. <br> Fuel capacity: 32t. <br> HARDPOINTS: <br> 4x utillity mounts. 4x small Hardpoints  2x Medium hardpoints. <br> INTERNAL COMPARTMENTS: <br> 1x class 1 compartment.  2x class 2 compartments. 3x class 3 compartments.  1x class 5 compartment.  1x class 6 compartments." 
        document.getElementById("asptext").innerHTML = text;
        counter = 1
        }else{text = "Although the Asp Explorer's name contains the word Explorer, it is one of the most flexible ship models available in terms of outfitting potential, and an extremely popular choice for pilots who want to dabble in various activities. For a low-cost medium ship, it has a decent cargo capacity of 130 tonnes, surpassing the Type-6 Transporter, and a surprisingly low hull mass for its size that allows it to achieve higher speeds than most dedicated trading vessels. With its six weapon hardpoints, it can be built into a well-armed freighter or a pure fighter suitable for light or moderate combat, but its combat ability is somewhat hampered by thinner armour and a prominent, damage-prone cockpit canopy. The Asp Explorer's best-known role is exploration, however, due to its considerable jump range, enough internal compartments to equip essential exploration modules, and the unobstructed views of the cosmos afforded by its canopy." 
        document.getElementById("asptext").innerHTML = text;
        counter = 0
        }}

        function diffTextd() {
            if (counter == 0){
            text = "Cost: 146,969,450 CR. <br> Landing Pad: Large. <br> pilot Seats: 3. <br> Hull Mass: 400t. <br> Armour: 945. <br> Shields: 362 MJ. <br> Fuel capacity: 32t. <br> HARDPOINTS: <br> 8x utillity mounts. 2x small Hardpoints  2x Medium hardpoints. 3x Large hardpoints.  1x Huge hardpoint. <br> INTERNAL COMPARTMENTS: <br> 1x class 1 compartment.  1x class 2 compartment. 3x class 4 compartments.  3x class 5 compartment.  3x class 6 compartments.  1x class 7 compartments. 1x class 5 Military compartment." 
            document.getElementById("anacondatext").innerHTML = text;
            counter = 1
            }else{text = "Boasting a total of eight weapon hardpoints, the Anaconda is a formidable combat ship. It, the Fer-de-Lance, the Federal Corvette, the Imperial Cutter, and the Mamba are the only ships capable of equipping Class 4 weaponry, the most powerful weapons that conventional ships can carry. Turreted and gimballed weapons are recommended due to the Anaconda's relatively stiff handling, which can make lining up shots difficult. Defensively, the Anaconda is extremely sturdy when customized for survivability. It has eight utility mounts, tied for the highest of any ship in the game, and its potent Class 8 Power Plant allows a Shield Generator, a Shield Cell Bank and multiple Shield Boosters to be activated simultaneously whilst still having enough output leftover to comfortably power the weapons and other systems. Even if the shields fail, the Anaconda has a base armor strength of 945 and a large number of optional internal compartments give plenty of room to install Hull or Module Reinforcement Packages to stack even more protection. Optimizing for hull/armour strength allows a maximum of 6,137.5 without Engineering." 
            document.getElementById("anacondatext").innerHTML = text;
            counter = 0
            }}

            function diffTexte() {
                if (counter == 0){
                text = "Cost: 208,969,451 CR. <br>  Landing Pad: Large. <br> pilot Seats: 3. <br> Hull Mass: 1,100t. <br> Armour: 720. <br> Shields: 704 MJ. <br> Fuel capacity: 64t. <br> HARDPOINTS: <br> 8x utillity mounts.  4x Medium hardpoints. 2x Large hardpoints.  1x Huge hardpoint. <br> INTERNAL COMPARTMENTS: <br> 1x class 1 compartment.  1x class 3 compartment. 1x class 4 compartment.  2x class 5 compartment.  3x class 6 compartments.  2x class 8 compartments. 2x class 5 Military compartment." 
                document.getElementById("cuttertext").innerHTML = text;
                counter = 1
                }else{text = "The Imperial Cutter is expensive and ponderous, but overall a very effective multi-purpose ship with a heavy armament. It lacks the versatility of the Anaconda and the combat prowess of the Federal Corvette, but has considerable potential as a trading vessel that can easily defend itself. Traders looking for a stylish, powerhouse ship with ample cargo capacity will usually find the Imperial Cutter more than satisfactory, while fighters and explorers may prefer the Federal Corvette and Anaconda, respectively. With a staggering 794 tons of max cargo capacity, the Imperial Cutter has the largest cargo bay of all playable ships in the game, making it an ideal ship for traders. However, it is also the most expensive ship in the game at a cost almost three times higher than a Type-9 Heavy, which has a max cargo capacity of 790 tons; only 4 tons less. It also has a lower cargo capacity when shielded, as the Type-9 can equip a lower class Shield Generator. The very high rebuy and repair costs of the Cutter makes shieldless runs incredibly risky, so it is important to keep this in mind as every bump and scratch will cut rather heavily into profits and like the Type-9, it is very difficult to dodge an Interdiction in the Cutter. Combined with its required Imperial Navy Rank can make the Cutter a much less appealing ship for traders." 
                document.getElementById("cuttertext").innerHTML = text;
                counter = 0
                }}