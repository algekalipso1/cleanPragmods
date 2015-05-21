%Makes merged images out of the specifid combinations of bases and
%features
addpath('/Users/Larry/Code/pragmods/experiments/images2/','/Users/Larry/Code/pragmods/experiments/images/')
bases = [{'sundae'},{'snowman'},{'friend'},{'boat-base1'},{'bike-base2'},{'Christmas tree-base1'},{'pizza-base1'}];
features = [{'chocolate'},{'cherry'},{'banana'};
    {'scarf'},{'gloves'},{'beanie'};
    {'glasses'},{'hat'},{'mustache'};
    {'boat-motor1'},{'boat-sail1'},{'boat-cabin1'};
    {'bike-basket'},{'bike-saddlebag'},{'bike-waterbottle'};
    {'Christmas tree-lights'},{'Christmas tree-ornaments'},{'Christmas tree-star'};
    {'pizza-mushrooms'},{'pizza-olives'},{'pizza-peppers'}];

%mergedImgs = bases*0;
mergedImgs = {};
imageSets = {size(bases,2)};
for i=1:size(bases,2)
    %load base image
    baseImg = imread(strcat(bases{i},'.png'));
    
    %currentFeatures=features(i);
    for j=1:size(features,2)
        %load feature images
        
        [featureImg,map,transparency] = imread(strcat(features{i,j},'.png'));
        
        %combine feature images with base image
        newImg = combineImages(baseImg,featureImg,transparency);
        imwrite(newImg,strcat('/Users/Larry/Code/pragmods/experiments/images/MergedImages/',bases{i},features{i,j},'.png'));
        mergedImgs{i,j} = newImg;
    end
    imageSets{i}=[mergedImgs{i,1},mergedImgs{i,2},mergedImgs{i,3}];
    imwrite(imageSets{i},strcat('/Users/Larry/Code/pragmods/experiments/images/MergedImages/',bases{i},'ImageSet.png'));
end
%Do something with the merged images including possibly add them to a ppt