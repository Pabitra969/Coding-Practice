#include<iostream>
using namespace std;

void bubbleSort(int arr[], int n) {
    for(int i=1; i<n; i++) {
        for(int j=0; j<n-i; j++) {
            if(arr[j] > arr[j+1]) swap(arr[j], arr[j+1]);
        }
    }
}

void insertionSort(int arr[], int n) {
    for (int  i = 0; i < n; i++)
    {
        int temp = arr[i];
        for(int j=i-1; j>=0; j--) {
            if(temp < arr[j]) {
                swap(arr[j+1], arr[j]);
            }
        }
    }
    
}

int main() {
    int arr[5] = {5,4,3,2,1};
    
    insertionSort(arr, 5);

    for(int i=0; i<5; i++) {
        cout << arr[i] << " " ;
    }
    
    return 0;
}