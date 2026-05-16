#include<iostream>
#include<vector>
using namespace std;

void printMatrix(const vector<vector<int>>& matrix, int n,int m) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }
}

vector<vector<int>> transpose(const vector<vector<int>>& matrix, int n,int m) {
    vector<vector<int>> transposed(m, vector<int>(n));
    for (int i = 0; i < n; i++) {
        for (int j = i; j < m; j++) {
            int temp = matrix[i][j];
            transposed[i][j] = matrix[j][i];
            transposed[j][i] = temp;
        }
    }
    return transposed;
}

int main() {
    vector<vector<int>> matrix = {
        {1, 2, 3},
        {4, 5, 6}
    };

    int n = matrix.size();
    int m=matrix[0].size();
    printMatrix(matrix, n,m);
    matrix = transpose(matrix, n,m);
    cout << "Transposed Matrix:" << endl;
    // printMatrix(matrix, n,m);
     for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}