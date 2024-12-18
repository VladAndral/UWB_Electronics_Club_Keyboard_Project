function wallBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[264.6010701,-241.1496171],[406.7340074,-149.3073153]]).appendArc([408.533288,-145.4601989],{"radius":4,"clockwise":false,"large":false}).appendPoint([395.5181492,-39.4604005]).appendArc([391.3726478,-35.9517215],{"radius":4,"clockwise":false,"large":false}).appendPoint([332.0243372,-38.5554132]).appendArc([331.9695272,-38.5581947],{"radius":4,"clockwise":false,"large":false}).appendPoint([307.9575805,-39.9419342]).appendArc([307.0195353,-40.1096881],{"radius":4,"clockwise":false,"large":false}).appendPoint([283.9853507,-47.1432894]).appendArc([283.9713864,-47.1475256],{"radius":4,"clockwise":true,"large":false}).appendPoint([250.3378146,-57.2837057]).appendArc([247.6283188,-62.1488387],{"radius":4,"clockwise":false,"large":false}).appendPoint([259.7692315,-107.4593419]).appendArc([255.9055281,-112.4946179],{"radius":4,"clockwise":true,"large":false}).appendPoint([178.1602695,-112.4946179]).appendArc([174.2965662,-107.4593419],{"radius":4,"clockwise":true,"large":false}).appendPoint([186.4374788,-62.1488388]).appendArc([183.7279831,-57.2837057],{"radius":4,"clockwise":false,"large":false}).appendPoint([150.0944113,-47.1475257]).appendArc([150.0804468,-47.1432894],{"radius":4,"clockwise":true,"large":false}).appendPoint([127.0462623,-40.1096881]).appendArc([126.1082171,-39.9419342],{"radius":4,"clockwise":false,"large":false}).appendPoint([102.0962704,-38.5581947]).appendArc([102.0414604,-38.5554132],{"radius":4,"clockwise":false,"large":false}).appendPoint([42.6931498,-35.9517215]).appendArc([38.5476484,-39.4604005],{"radius":4,"clockwise":false,"large":false}).appendPoint([25.5325096,-145.460199]).appendArc([27.3317902,-149.3073153],{"radius":4,"clockwise":false,"large":false}).appendPoint([169.4647275,-241.1496171]).appendArc([171.6356315,-241.7899779],{"radius":4,"clockwise":false,"large":false}).appendPoint([262.4301661,-241.7899779]).appendArc([264.6010701,-241.1496171],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
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
            
            
        
            function main() {
                return bottomForWalls_case_fn();
            }

        