<script>
export default {
  props: ["pokemon"],
  data: () => ({
    colours: {
      Normal: "#A8A77A",
      Fire: "#EE8130",
      Water: "#6390F0",
      Electric: "#F7D02C",
      Grass: "#7AC74C",
      Ice: "#96D9D6",
      Fighting: "#C22E28",
      Poison: "#A33EA1",
      Ground: "#E2BF65",
      Flying: "#A98FF3",
      Psychic: "#F95587",
      Bug: "#A6B91A",
      Rock: "#B6A136",
      Ghost: "#735797",
      Dragon: "#6F35FC",
      Dark: "#000000",
      Steel: "#B7B7CE",
      Fairy: "#D685AD",
    },
	
  }),
  computed: {
	gradient() {
		if (this.pokemon!=null){
			if (this.pokemon.types.length>1){
				var firstColor =this.colours[this.pokemon.types[0]]+"80";
				var secondColor =this.colours[this.pokemon.types[1]]+"80";
				return  "linear-gradient("+firstColor+", "+secondColor+")"
			}
			else {
				var firstColor =this.colours[this.pokemon.types[0]]+"80"
				var secondColor =this.colours[this.pokemon.types[0]]+"50"
				return  "linear-gradient("+firstColor+", "+secondColor+")"
			}
		}
		else{
			return "linear-gradient(#000000, #000000)"
		}
	},
  },
};
</script> 
 <template >
  <div class="card rounded" :style="{'background-image':gradient}" v-if="pokemon!=null">
	  <h1>{{ pokemon.name }}</h1>
    <div>
      <img :src="pokemon.imageURL" class="pokeImg"/>
    </div>
    <div>
      
	  <p class="details">
      <li class="centered">
        <span class="badge"
          v-for="t in pokemon.types"
          :key="t"
          :style="{ backgroundColor: colours[t] }"
          >{{ t }}</span
        >
      </li>
		  <li v-if="pokemon.prevo!=null">Previous evolution: {{ pokemon.prevo }}</li>
		  <li v-if="pokemon.evos.length!=0" >Next evolution: {{ pokemon.evos[0] }}</li>
      <li v-if="pokemon.otherFormes.length!=0">Next evolution: {{ pokemon.otherFormes[0]}}</li>
      <h4>Basic statistics</h4>
		  <!-- <li>Height: <span class="data-span"> {{ pokemon.heightm }} m</span></li>
		  <li>Weight: <span class="data-span"> {{ pokemon.weightkg }} Kg</span></li>
      <li>HP: <span class="data-span"> {{ pokemon.baseStats.hp}}</span></li>
      <li>Attack: <span class="data-span"> {{ pokemon.baseStats.atk}}</span></li>
      <li>Defense: <span class="data-span"> {{ pokemon.baseStats.def}}</span></li>
      <li>Speed of attack: <span class="data-span"> {{ pokemon.baseStats.spa}}</span></li>
      <li>Speed of defense: <span class="data-span"> {{ pokemon.baseStats.spd}}</span></li>
      <li>Speed: <span class="data-span"> {{ pokemon.baseStats.spe}}</span></li> -->
      <table>
        <td>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Height</td>
            <td class="data-cell">{{pokemon.heightm}}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td class="data-cell">{{pokemon.weightkg}}</td>
          </tr>
          <tr>
            <td>HP</td>
            <td class="data-cell">{{pokemon.baseStats.hp}}</td>
          </tr>
          <tr>
            <td>Attack</td>
            <td class="data-cell">{{pokemon.baseStats.atk}}</td>
          </tr>
          <tr>
            <td>Defense</td>
            <td class="data-cell">{{pokemon.baseStats.def}}</td>
          </tr>
          <tr>
            <td>Speed of attack</td>
            <td class="data-cell">{{pokemon.baseStats.spa}}</td>
          </tr>
          <tr>
            <td>Speed of defense</td>
            <td class="data-cell">{{pokemon.baseStats.spd}}</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td class="data-cell">{{pokemon.baseStats.spe}}</td>
          </tr>
        </td>
      </table>
	  </p>
    </div>
  </div>
</template>

<style scoped>
.badge {
  margin: 1rem;
  padding: 0.5rem;
  border-radius:2rem;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  width: 5rem;
  display: inline-block;
}
/* center card in parent */
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  /* set minimum width to 768px */
  background-color: white;
  border-radius: 2rem;
}
/* center image in card and set height to 30vh */
.pokeImg {
  width: 100%;
  height: 30vh;
  object-fit: cover;
}
.details{
	padding: 1rem;
	list-style: none;
	border-radius: 2rem ;
	background-color: white;
}

li{
	margin:0.5rem
}
.centered{
	text-align: center;
}
h4{
  font-weight: 900;
}

.data-cell{
  text-align: right;
width: 100px;
}

</style>