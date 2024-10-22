let grid =[[2,1,1],[1,1,0],[0,1,1]]
let fresh=0;
let queue=[];
let count=0;
for(let i=0;i<grid.length;i++){
    for(let j=0;j<grid[0].length;j++){
        if(grid[i][j]===1){
            fresh++;
        }
        if(grid[i][j]===2){
            queue.push([i,j]);
        }
    }
}
let directions=[[0,1],[-1,0],[1,0],[0,-1]];
while(queue.length&&fresh>0){
    [r,c]=queue.shift();
    for(let [dr,dc] of directions){
        row=r+dr;
        col=c+dc;
        if(row<0 ||col<0 ||row>=grid.length||col>=grid[0].length||grid[row][col]!=1){
            continue;
        }
        else{
            queue.push([row,col]);
            grid[row][col]=2;
        fresh--;
        }
    }
    count++;
}
console.log(count)