class test_BinarySearchAlgorithm {

    public static void main(String[] args) {

        int[] list = {1,2,3,4,5,6,7,8,9,10,11,12};
        int item = 12;
        int[] results;
        BinarySearchAlgorithm bsa = new BinarySearchAlgorithm();
        results = bsa.BinarySearchAlgorithm(list, item);
        System.out.println("The array is " + list);
        System.out.println("The target value is " + item);
        System.out.println("The value index is " + results[0]);
        System.out.println("The attempts is " + results[1]);

    }
}
