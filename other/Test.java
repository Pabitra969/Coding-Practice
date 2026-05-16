package other;

class Test {
    static int f(int[] a, int i){
        if(i == a.length) return 0;
        return a[i] + f(a, i+1);
    }
    public static void main(String[] args) {
        int[] arr = {3,1,4};
        System.out.println(f(arr, 0));
    }
}