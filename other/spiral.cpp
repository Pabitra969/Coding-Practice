#include<iostream>
#include<vector>
using namespace std;

void solve(int srow, int erow, int scol, int ecol, vector<vector<int>> matrix, vector<vector<bool>>& visited) {
    if(srow > erow && scol > ecol) return;

    //left
    for(int i=scol; i<=ecol; i++) {
        if(!visited[srow][i]) {
            cout << matrix[srow][i] << " ";
            visited[srow][i] = 1;
        }
    }
    // right
    for(int i=srow; i<=erow; i++) {
        if(!visited[i][ecol]) {
            cout << matrix[i][ecol] << " ";
            visited[i][ecol] = 1;
        }
    }

    // bottom
    for(int i=ecol; i>=scol; i--) {
        if(!visited[erow][i]) {
            cout << matrix[erow][i] << " ";
            visited[erow][i] = 1;
        }
    }

    // up
    for(int i=erow; i>=srow; i--) {
        if(!visited[i][scol]) {
            cout << matrix[i][scol] << " ";
            visited[i][scol] = 1;
        }
    }

    solve(srow+1, erow-1, scol+1, ecol-1, matrix, visited);
}

int main() {

    vector<vector<int>> matrix = {
        {1,2,3},
        {4,5,6},
        {7,8,9},
        {10,11,12}
    };

    vector<vector<bool>> visited(4, vector<bool>(3,0));

    solve(0, 3, 0, 2, matrix, visited);
    cout << endl;

    return 0;
}