function board_extrude_1_outline_fn(){
    return new CSG.Path2D([[264.6036519,-237.6093358],[403.9560382,-147.1319062]]).appendArc([405.7479896,-143.2895371],{"radius":4,"clockwise":false,"large":false}).appendPoint([393.3399367,-42.2340555]).appendArc([389.2078973,-38.7248086],{"radius":4,"clockwise":false,"large":false}).appendPoint([332.4213321,-41.0244872]).appendArc([332.3547221,-41.0277411],{"radius":4,"clockwise":false,"large":false}).appendPoint([308.4360843,-42.3961175]).appendArc([307.4951935,-42.5643285],{"radius":4,"clockwise":false,"large":false}).appendPoint([284.5440125,-49.580348]).appendArc([284.5374295,-49.5823543],{"radius":4,"clockwise":true,"large":false}).appendPoint([253.3888676,-59.0456888]).appendArc([250.6879367,-63.9082301],{"radius":4,"clockwise":false,"large":false}).appendPoint([262.8310936,-109.2271088]).appendArc([258.9673903,-114.2623848],{"radius":4,"clockwise":true,"large":false}).appendPoint([175.0984073,-114.2623848]).appendArc([171.234704,-109.2271088],{"radius":4,"clockwise":true,"large":false}).appendPoint([183.3778609,-63.9082301]).appendArc([180.6769301,-59.0456887],{"radius":4,"clockwise":false,"large":false}).appendPoint([149.5283682,-49.5823542]).appendArc([149.521785,-49.580348],{"radius":4,"clockwise":true,"large":false}).appendPoint([126.5706041,-42.5643285]).appendArc([125.6297133,-42.3961175],{"radius":4,"clockwise":false,"large":false}).appendPoint([101.7110755,-41.0277411]).appendArc([101.6444655,-41.0244872],{"radius":4,"clockwise":false,"large":false}).appendPoint([44.8579003,-38.7248086]).appendArc([40.7258609,-42.2340554],{"radius":4,"clockwise":false,"large":false}).appendPoint([28.317808,-143.2895371]).appendArc([30.1097594,-147.1319063],{"radius":4,"clockwise":false,"large":false}).appendPoint([169.4621457,-237.6093358]).appendArc([171.6403789,-238.2544439],{"radius":4,"clockwise":false,"large":false}).appendPoint([262.4254187,-238.2544439]).appendArc([264.6036519,-237.6093359],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        