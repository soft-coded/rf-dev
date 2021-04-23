import r1 from "../images/r1.jpg";
import r2 from "../images/r2.jpg";
import r3 from "../images/r3.jpg";

// eslint-disable-next-line
export default [
	{
		id: 1,
		image: r1,
		title:
			"Fusion of expression values and protein interaction information using multi-objective optimization for improving gene clustering.",
		content:
			"One of the crucial problems in the field of functional genomics is to identify a set of genes which are responsible for a particular cellular mechanism. The current work explores the usage of a multi-objective optimization based genetic clustering technique to classify genes into groups with respect to their functional similarities and biological relevance. Our contribution is two-fold: firstly a new quality measure to compute the goodness of gene-clusters namely protein-protein interaction confidence score is developed. This utilizes the confidence scores of the protein-protein interaction networks to measure the similarity between genes of a particular cluster with respect to their biochemical protein products."
	},
	{
		id: 2,
		image: r2,
		title:
			"Graph-based Hub Gene Selection Technique using Protein Interaction Information: Application to Sample Classification",
		content:
			"Classification of samples of gene expression profile plays a significant role in prediction and diagnosis of diseases. In the task of sample classification, a robust feature selection algorithm is very much essential to identify the important genes from the high dimensional gene expression data. This paper explores the information of protein-protein interaction (PPI) with a graph mining technique for finding a proper subset of features (genes), which further takes part in sample classification. Here, our contribution for feature selection is three-fold: first, all the genes are grouped into different clusters based on the integrated information of the gene expression values and their protein interactions using a multi-objective optimization (MOO) based clustering approach."
	},
	{
		id: 3,
		image: r3,
		title:
			"Ensembling of Gene Clusters utilizing Deep Learning and Protein-protein Interaction Information",
		content:
			"Cluster ensemble techniques aim to combine the outputs of multiple clustering algorithms to obtain a single consensus partitioning. The current paper reports about the development of a cluster ensemble based technique combining the concepts of multi-objective optimization and deep-learning models for gene clustering where some additional protein-protein interaction information are utilized for generating the consensus partitioning. The first approach is based on a traditional machine learning method, and another approach exploits the graph partitioning algorithm and two deep neural models to generate the final clustering."
	}
];
