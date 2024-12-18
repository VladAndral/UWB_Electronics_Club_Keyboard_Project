function wallBoard_extrude_4_outline_fn(){
    return new CSG.Path2D([[264.6010701,-241.1496171],[406.7340074,-149.3073153]]).appendArc([408.533288,-145.4601989],{"radius":4,"clockwise":false,"large":false}).appendPoint([395.5181492,-39.4604005]).appendArc([391.3726478,-35.9517215],{"radius":4,"clockwise":false,"large":false}).appendPoint([332.0243372,-38.5554132]).appendArc([331.9695272,-38.5581947],{"radius":4,"clockwise":false,"large":false}).appendPoint([307.9575805,-39.9419342]).appendArc([307.0195353,-40.1096881],{"radius":4,"clockwise":false,"large":false}).appendPoint([283.9853507,-47.1432894]).appendArc([283.9713864,-47.1475256],{"radius":4,"clockwise":true,"large":false}).appendPoint([250.3378146,-57.2837057]).appendArc([247.6283188,-62.1488387],{"radius":4,"clockwise":false,"large":false}).appendPoint([259.7692315,-107.4593419]).appendArc([255.9055281,-112.4946179],{"radius":4,"clockwise":true,"large":false}).appendPoint([178.1602695,-112.4946179]).appendArc([174.2965662,-107.4593419],{"radius":4,"clockwise":true,"large":false}).appendPoint([186.4374788,-62.1488388]).appendArc([183.7279831,-57.2837057],{"radius":4,"clockwise":false,"large":false}).appendPoint([150.0944113,-47.1475257]).appendArc([150.0804468,-47.1432894],{"radius":4,"clockwise":true,"large":false}).appendPoint([127.0462623,-40.1096881]).appendArc([126.1082171,-39.9419342],{"radius":4,"clockwise":false,"large":false}).appendPoint([102.0962704,-38.5581947]).appendArc([102.0414604,-38.5554132],{"radius":4,"clockwise":false,"large":false}).appendPoint([42.6931498,-35.9517215]).appendArc([38.5476484,-39.4604005],{"radius":4,"clockwise":false,"large":false}).appendPoint([25.5325096,-145.460199]).appendArc([27.3317902,-149.3073153],{"radius":4,"clockwise":false,"large":false}).appendPoint([169.4647275,-241.1496171]).appendArc([171.6356315,-241.7899779],{"radius":4,"clockwise":false,"large":false}).appendPoint([262.4301661,-241.7899779]).appendArc([264.6010701,-241.1496171],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}


function board_extrude_4_outline_fn(){
    return new CSG.Path2D([[264.6036519,-237.6093358],[403.9560382,-147.1319062]]).appendArc([405.7479896,-143.2895371],{"radius":4,"clockwise":false,"large":false}).appendPoint([393.3399367,-42.2340555]).appendArc([389.2078973,-38.7248086],{"radius":4,"clockwise":false,"large":false}).appendPoint([332.4213321,-41.0244872]).appendArc([332.3547221,-41.0277411],{"radius":4,"clockwise":false,"large":false}).appendPoint([308.4360843,-42.3961175]).appendArc([307.4951935,-42.5643285],{"radius":4,"clockwise":false,"large":false}).appendPoint([284.5440125,-49.580348]).appendArc([284.5374295,-49.5823543],{"radius":4,"clockwise":true,"large":false}).appendPoint([253.3888676,-59.0456888]).appendArc([250.6879367,-63.9082301],{"radius":4,"clockwise":false,"large":false}).appendPoint([262.8310936,-109.2271088]).appendArc([258.9673903,-114.2623848],{"radius":4,"clockwise":true,"large":false}).appendPoint([175.0984073,-114.2623848]).appendArc([171.234704,-109.2271088],{"radius":4,"clockwise":true,"large":false}).appendPoint([183.3778609,-63.9082301]).appendArc([180.6769301,-59.0456887],{"radius":4,"clockwise":false,"large":false}).appendPoint([149.5283682,-49.5823542]).appendArc([149.521785,-49.580348],{"radius":4,"clockwise":true,"large":false}).appendPoint([126.5706041,-42.5643285]).appendArc([125.6297133,-42.3961175],{"radius":4,"clockwise":false,"large":false}).appendPoint([101.7110755,-41.0277411]).appendArc([101.6444655,-41.0244872],{"radius":4,"clockwise":false,"large":false}).appendPoint([44.8579003,-38.7248086]).appendArc([40.7258609,-42.2340554],{"radius":4,"clockwise":false,"large":false}).appendPoint([28.317808,-143.2895371]).appendArc([30.1097594,-147.1319063],{"radius":4,"clockwise":false,"large":false}).appendPoint([169.4621457,-237.6093358]).appendArc([171.6403789,-238.2544439],{"radius":4,"clockwise":false,"large":false}).appendPoint([262.4254187,-238.2544439]).appendArc([264.6036519,-237.6093359],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}


function standoffs_extrude_4_outline_fn(){
    return CAG.circle({"center":[207.5328988,-221.2838812],"radius":2.5})
.union(
    CAG.circle({"center":[258.0070442,-136.6220251],"radius":2.5})
).union(
    CAG.circle({"center":[176.0587534,-136.6220251],"radius":2.5})
).union(
    CAG.circle({"center":[333.5239229,-173.9616531],"radius":2.5})
).union(
    CAG.circle({"center":[100.5418747,-173.9616531],"radius":2.5})
).union(
    CAG.circle({"center":[278.8317382,-75.5306746],"radius":2.5})
).union(
    CAG.circle({"center":[155.2340595,-75.5306746],"radius":2.5})
).union(
    CAG.circle({"center":[372.5900272,-65.2485151],"radius":2.5})
).union(
    CAG.circle({"center":[61.4757705,-65.2485151],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function mountingPegs_extrude_4_outline_fn(){
    return CAG.circle({"center":[207.5328988,-221.2838812],"radius":1.5})
.union(
    CAG.circle({"center":[258.0070442,-136.6220251],"radius":1.5})
).union(
    CAG.circle({"center":[176.0587534,-136.6220251],"radius":1.5})
).union(
    CAG.circle({"center":[333.5239229,-173.9616531],"radius":1.5})
).union(
    CAG.circle({"center":[100.5418747,-173.9616531],"radius":1.5})
).union(
    CAG.circle({"center":[278.8317382,-75.5306746],"radius":1.5})
).union(
    CAG.circle({"center":[155.2340595,-75.5306746],"radius":1.5})
).union(
    CAG.circle({"center":[372.5900272,-65.2485151],"radius":1.5})
).union(
    CAG.circle({"center":[61.4757705,-65.2485151],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function wallBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[264.6010701,-241.1496171],[406.7340074,-149.3073153]]).appendArc([408.533288,-145.4601989],{"radius":4,"clockwise":false,"large":false}).appendPoint([395.5181492,-39.4604005]).appendArc([391.3726478,-35.9517215],{"radius":4,"clockwise":false,"large":false}).appendPoint([332.0243372,-38.5554132]).appendArc([331.9695272,-38.5581947],{"radius":4,"clockwise":false,"large":false}).appendPoint([307.9575805,-39.9419342]).appendArc([307.0195353,-40.1096881],{"radius":4,"clockwise":false,"large":false}).appendPoint([283.9853507,-47.1432894]).appendArc([283.9713864,-47.1475256],{"radius":4,"clockwise":true,"large":false}).appendPoint([250.3378146,-57.2837057]).appendArc([247.6283188,-62.1488387],{"radius":4,"clockwise":false,"large":false}).appendPoint([259.7692315,-107.4593419]).appendArc([255.9055281,-112.4946179],{"radius":4,"clockwise":true,"large":false}).appendPoint([178.1602695,-112.4946179]).appendArc([174.2965662,-107.4593419],{"radius":4,"clockwise":true,"large":false}).appendPoint([186.4374788,-62.1488388]).appendArc([183.7279831,-57.2837057],{"radius":4,"clockwise":false,"large":false}).appendPoint([150.0944113,-47.1475257]).appendArc([150.0804468,-47.1432894],{"radius":4,"clockwise":true,"large":false}).appendPoint([127.0462623,-40.1096881]).appendArc([126.1082171,-39.9419342],{"radius":4,"clockwise":false,"large":false}).appendPoint([102.0962704,-38.5581947]).appendArc([102.0414604,-38.5554132],{"radius":4,"clockwise":false,"large":false}).appendPoint([42.6931498,-35.9517215]).appendArc([38.5476484,-39.4604005],{"radius":4,"clockwise":false,"large":false}).appendPoint([25.5325096,-145.460199]).appendArc([27.3317902,-149.3073153],{"radius":4,"clockwise":false,"large":false}).appendPoint([169.4647275,-241.1496171]).appendArc([171.6356315,-241.7899779],{"radius":4,"clockwise":false,"large":false}).appendPoint([262.4301661,-241.7899779]).appendArc([264.6010701,-241.1496171],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function walls_case_fn() {
                    

                // creating part 0 of case walls
                let walls__part_0 = _outerWall_case_fn();

                // make sure that rotations are relative
                let walls__part_0_bounds = walls__part_0.getBounds();
                let walls__part_0_x = walls__part_0_bounds[0].x + (walls__part_0_bounds[1].x - walls__part_0_bounds[0].x) / 2
                let walls__part_0_y = walls__part_0_bounds[0].y + (walls__part_0_bounds[1].y - walls__part_0_bounds[0].y) / 2
                walls__part_0 = translate([-walls__part_0_x, -walls__part_0_y, 0], walls__part_0);
                walls__part_0 = rotate([0,0,0], walls__part_0);
                walls__part_0 = translate([walls__part_0_x, walls__part_0_y, 0], walls__part_0);

                walls__part_0 = translate([0,0,0], walls__part_0);
                let result = walls__part_0;
                
            

                // creating part 1 of case walls
                let walls__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let walls__part_1_bounds = walls__part_1.getBounds();
                let walls__part_1_x = walls__part_1_bounds[0].x + (walls__part_1_bounds[1].x - walls__part_1_bounds[0].x) / 2
                let walls__part_1_y = walls__part_1_bounds[0].y + (walls__part_1_bounds[1].y - walls__part_1_bounds[0].y) / 2
                walls__part_1 = translate([-walls__part_1_x, -walls__part_1_y, 0], walls__part_1);
                walls__part_1 = rotate([0,0,0], walls__part_1);
                walls__part_1 = translate([walls__part_1_x, walls__part_1_y, 0], walls__part_1);

                walls__part_1 = translate([0,0,0], walls__part_1);
                result = result.subtract(walls__part_1);
                
            
                    return result;
                }
            
            

                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = wallBoard_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _outerWall__part_0_bounds = _outerWall__part_0.getBounds();
                let _outerWall__part_0_x = _outerWall__part_0_bounds[0].x + (_outerWall__part_0_bounds[1].x - _outerWall__part_0_bounds[0].x) / 2
                let _outerWall__part_0_y = _outerWall__part_0_bounds[0].y + (_outerWall__part_0_bounds[1].y - _outerWall__part_0_bounds[0].y) / 2
                _outerWall__part_0 = translate([-_outerWall__part_0_x, -_outerWall__part_0_y, 0], _outerWall__part_0);
                _outerWall__part_0 = rotate([0,0,0], _outerWall__part_0);
                _outerWall__part_0 = translate([_outerWall__part_0_x, _outerWall__part_0_y, 0], _outerWall__part_0);

                _outerWall__part_0 = translate([0,0,0], _outerWall__part_0);
                let result = _outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = board_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([0,0,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoffs_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mountingPegs_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
                }
            
            

                function bottomForWalls_case_fn() {
                    

                // creating part 0 of case bottomForWalls
                let bottomForWalls__part_0 = wallBoard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottomForWalls__part_0_bounds = bottomForWalls__part_0.getBounds();
                let bottomForWalls__part_0_x = bottomForWalls__part_0_bounds[0].x + (bottomForWalls__part_0_bounds[1].x - bottomForWalls__part_0_bounds[0].x) / 2
                let bottomForWalls__part_0_y = bottomForWalls__part_0_bounds[0].y + (bottomForWalls__part_0_bounds[1].y - bottomForWalls__part_0_bounds[0].y) / 2
                bottomForWalls__part_0 = translate([-bottomForWalls__part_0_x, -bottomForWalls__part_0_y, 0], bottomForWalls__part_0);
                bottomForWalls__part_0 = rotate([0,0,0], bottomForWalls__part_0);
                bottomForWalls__part_0 = translate([bottomForWalls__part_0_x, bottomForWalls__part_0_y, 0], bottomForWalls__part_0);

                bottomForWalls__part_0 = translate([0,0,0], bottomForWalls__part_0);
                let result = bottomForWalls__part_0;
                
            
                    return result;
                }
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = walls_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.union(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = _holes_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.subtract(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = bottomForWalls_case_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.union(case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        