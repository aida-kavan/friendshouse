from Bio.Seq import Seq
dna = Seq("ATGGCGTTCGAA")
print("Protein:", dna.translate())