class Sample{
	String n;
	String c;
	String b;
	int r;
	public Sample(int roll, String name , String branch, String college){
		
		this.r=roll;
		this.n=name;
		this.b=branch;
		this.c=college;
	
}
	public void display(){
		
		System.out.println(n);
		System.out.println(r);
		System.out.println(b);
		System.out.println(c);
		
	}
	public static void main (String aa[]){
	
	Sample obj=new Sample(101,"sanskar","CSE","ABES");
	obj.display();
	
}
}