function newImg = combineImages(main,prop,transparency)
%main = imread('sundae.png');
%prop = imread('banana.png');

newImg = main;
for i=1:size(main,1)
    for j=1:size(main,2)
        if transparency(i,j)~=0
            newImg(i,j,:) = prop(i,j,:);
        end
    end
end

%imshow(newImg)