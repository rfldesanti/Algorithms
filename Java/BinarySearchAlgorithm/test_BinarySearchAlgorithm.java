class test_BinarySearchAlgorithm {

    public static void main(String[] args) {

        int[] list = {1,2,3,4,5,6,7,8,9,10,11,12};
        int item = 12;
        int[] results;
        BinarySearchAlgorithm bsa = new BinarySearchAlgorithm();
        results = bsa.BinarySearchAlgorithm(list, item);
        //String[] array_content = new String[list.length];
        //array_content = list.toString();
        System.out.println("Array: " + list.toString() + " not working ");
        System.out.println("Length of array " + list.length);
        System.out.println("Target: " + item);
        System.out.println("Index: " + results[0]);
        System.out.println("Attempts: " + results[1]);

    }
}
