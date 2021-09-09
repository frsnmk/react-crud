/**

CRUD React Typescript + axios

1. Buat Folder (beri nama services) dan file untuk menyimpan interface dan axios.create
   a. Buat interface untuk objek yang ingin
      dibuat CRUDnya.
      Ex: export inteface User {
	  	fullname:string,
		age:number
	  }

   b. Buat variable sebagai intance dari axios.create dan
      isi baseURLnya.
      Ex: const UserClient = axios.create({
		baseURL:'https://60c1922b4f7e880017dbfdfd.mockapi.io/'
	  })

   c. Buat sebuah fungsi yang didalamnya akan ada funsi create, update,
      delete, get dan fetch, atau fungsi lainnya yang 
      sesuai dengan kebutuhan.
      Ex:
	export const useProduct = () => ({

	async create(product:IProduct):Promise<IProduct>{
 	     const { data } = await ProductClient.post('/products', product)
             return data
        },
	
        async update(id:number, product:IProduct):Promise<IProduct>{
            const { data } = await ProductClient.put(`/products/${id}`, product)
            return data
        },
        async delete(id:string|number):Promise<void>{
            const { data } = await ProductClient.delete(`/products/${id}`)
            return data
        },
        async get(id:number):Promise<IProduct>{
            const { data } = await ProductClient.get(`/products/${id}`)
            return data
        },
        async fetch():Promise<IProduct[]>{
            const { data } = await ProductClient.get(`/products`)
            return data
        }
      )}
    
2. Buat komponent dimana kita akan menampilkan list datanya.
   SHOWDATA:
   a. Buat sebuah state untuk menampung seluruh data yang di fetch.
      Ex: const [products, setProducts] = useState<IProduct[]>()
   b. Buat sebuah variable untuk memjadi instance dari useHistory
      yang nanti akan kita gunakan untuk berpindah url
      Ex: const history = useHistory()
   c. Buat sebuah variable untuk menjadi instance useProduct yang
      telah kita buat.  
      Ex: const productService = useProduct()
   d. Buat function untuk load semua data dan simpan di variable state.
      untuk contoh simpan divariable products, caranya adalah
      dengan mengetik setProducts(datanya)
      Ex:  
        const loadData = () => {
            setLoading(true)
            personService.fetch()
                .then(products => setProducts(products))
                .catch(e => console.log(e))
                .finally(()=> setLoading(false))
        }
   e. Agar function loadData() bisa dijalankan satu kali saat
      komponent mau dirender maka gunakan useEffect() yang sama
      dengan componentDidMount().
      Ex:
        useEffect(loadData, [])
   f. Kemudian data akan bisa ditampilkan di JSX.

   DELETE DATA:
   a. Buat function deleteData() yang meiliki parameter ID.
      Ex:
        const deleteProduct = (id:string|number)  => {
            const con = window.confirm('Are You  Sure?')
            if(con){
                personService.delete(id)
                    .then(()=> setProducts(products?.filter(p => p.id !== id)))
                    .catch(e => console.log(e))
            }
        }
   b. Kemudian pada button atau apapun yang memiliki properti
      onClick, buat arrow func yang didalamnya akan menjalankan
      funtion delete. (tidak harus selalu onClick)
      Ex:
        <button onClick = {()=>deleteProduct(product.id!)} className="btn btn-danger">Delete</button> 

    ADD + EDIT DATA:
    a. Buat sebuah route untuk form. (kalo belum bisa 
       liat turotial cara buat route).
       *note: simpen route ini diatas route path='/products'
       Ex: 
        <Route path='product/:id' component={ProductForm} />
    b. Buat component untuk menampilkan form.
    c. Buat sebuah state sebagai penampung data form dan buat nilai defaultnya.
       Ex: const [formVal setFormVal] = useState<IProduct>({
                name: '',
                stock: '',
                price:''
           })
    d. Buat sebuah variable yang akan menjadi instance dari
       useProduct() (func create axios).
       Ex: const productService = useProduct()
    e. Buat sebuah variable yang akan menjadi intance dari
       useParams (adalah sebuah func untuk mengambil params dari url)
       Ex: const params = useParams()
    f. Buat function yang akan get product dengan id yang dipilih.
       kelak function ini akan dibutuhkan untuk mengeset state formVal.
       Ex:
        const getProduct = (id:number):void => {
            productService.get(id)
                .then(data => setProduct(data))
                .catch(e => e.message)
        }
    g. Buat tombol untuk kita bisa mengakses create dan edit
       pakai history. DILAKUKAN DI KOMPONENT LAIN.
       Ex: onClick={()=>history.push('/products/create')}
           onClick = {()=>history.push(`/products/${product.id}`)}
    h. Langkah selanjutnya kita buat percabangan dimana jika
       params.id != 'create' maka set nilai untuk penampung form
       tadi (JALANKAN function getProduct()). Karena kita hal ini akan dijalankan hanya pertamakali
       ketika component di load maka kita simpan lojik ini didalam
       useEffect() / componentDidMount().
       Ex:
        useEffect(()=>{
            if(params.id !=="create"){
                 getProduct(Number(params.id)) //Number untuk mengubah ke int, penggunaannya bisa menysuaikan.
            }
        },[])
    i. Selanjutnya buat text input dan button sebanyak yang dibutuhkan.
       Kemudian set value dari si tag input itu. lebih lanjut liat Ex.
       Ex:
        <input type="text" name={'name'} value={product?.name} onChange ={({target:{value:name}})=>setProduct({...product, name})} className="form-control" id="name" placeholder="Enter Product Name"/>
        <button onClick={onSubmit()}>Submit</button>
    j. Buat funsi onSubmit yang kelak akan dijalankan ketika
       button diclick. Didalam fungsi onSubmit ini kita buat dua kondisi.
       Yaitu kondisi kita masuk ke url create maka jalankan funsi create,
       jika kita mesuk ke url yang params.idnya bukan "create", maka
       jalankan fungsi update.
       Ex:
            const onSubmit = () => {
                !product.id && productService
                    .create(product)
                    .then(product => setProduct(product))
                    .catch(e => console.log(e))
                product.id && productService
                    .update(product.id, product)
                    .then(product => setProduct(product))
                    .catch(e => console.log(e))
            }

*/
      