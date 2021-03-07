import java.util.*;

class test_BinarySearchAlgorithm {

    public static void main(String[] args) {

        int[] list = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30};
        int item = 0;
        int[] results;
        BinarySearchAlgorithm bsa = new BinarySearchAlgorithm();
        results = bsa.BinarySearchAlgorithm(list, item);
        System.out.println("Array: " + Arrays.toString(list));
        System.out.println("Length of array: " + list.length);
        System.out.println("Target: " + item);
        if (results[0] == -1) {
            System.out.println("The value does not exists in array");
        } else {
            System.out.println("Index: " + results[0]);
        }
        System.out.println("Attempts: " + results[1]);

    }
}
