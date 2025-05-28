---
layout: page
title: Do retrieval heads speak the same language?
description: This project analyzes retrieval heads in multilingual LLMs using Needle-in-a-Haystack tasks across English, German, and Chinese. We find that strong retrieval heads are largely language-agnostic and critical for performance. Masking them leads to significant accuracy drops, offering insights for optimizing KV caching and multilingual model efficiency.
img: assets/img/2_etnlp_project/merged.png
importance: 2
category: research
giscus_comments: true
date: "03/25"
tags: ["NLP", "Interpretibility", "Causal Analysis"]
in_preparation: true
---
<div class="text-center mb-3" style="font-size: 1.5rem; font-weight: bold;">
  <a href="/assets/pdf/ETNLP_Project.pdf" target="_blank" style="color: #007bff;">[Report]</a>
  <a href="https://github.com/shaswatpatel123/Retrieval_Head" target="_blank" style="color: #007bff; margin-left: 5px;">[Code]</a>
  <a href="/assets/pdf/ETNLP_FINAL_POSTER.pdf" target="_blank" style="color: #007bff; margin-left: 5px;">[Poster]</a>
</div>

<h2>Project Summary</h2>
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/2_etnlp_project/fig1.png" title="Figure 1: NIAH Results Across Languages" class="img-fluid rounded" %}
  </div>
</div>
<h3>1. Introduction</h3>
<p>
This project investigates retrieval heads in multilingual LLMs. Retrieval heads are attention heads responsible for pulling relevant information from long contexts. We extend existing mechanistic analyses to multilingual settings and show that:
</p>
<ul>
  <li>30–40% of retrieval heads are language-specific.</li>
  <li>Strong retrieval heads tend to be language-agnostic.</li>
  <li>Masking top retrieval heads significantly degrades model performance.</li>
</ul>
<p>Our findings offer insights for KV-cache pruning and multilingual model optimization.</p>

<h3>2. Related Work</h3>
<p>
We build on work that identifies induction, suppression, and retrieval heads in monolingual models. Prior multilingual studies reveal latent English-centric behavior in many models. We unify these directions to analyze how retrieval heads behave across languages and translation tasks.
</p>

<h3>3. Experimental Setup</h3>
<p>
We use the Needle-in-a-Haystack (NIAH) task to locate retrieval heads in Qwen-2.5-3B and Phi-3.5-Mini LLMs. NIAH consists of a long context (haystack), a query, and a needle (answer). We calculate retrieval scores as:
</p>
<pre>|gh ∩ k| / |k|</pre>
<p>
We extend this to multilingual setups using translated haystacks from Wikipedia dumps and evaluate across English, German, and Chinese.
</p>


<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/2_etnlp_project/fig2.png" title="Figure 2: Multilingual NIAH Pipeline" class="img-fluid rounded" %}
  </div>
</div>
<div class="caption">Figure 1 shows retrieval accuracy drop in German. Figure 2 illustrates the multilingual NIAH setup.</div>

<h3>4. Results</h3>
<p>
We categorize retrieval heads by their overlap across languages, their strength, and their placement in the transformer. Key findings include:
</p>

<h4>Finding 1: Language-Agnostic vs Specific Heads</h4>
<p>
Only 40–70% of retrieval heads are shared across all three languages.
</p>
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/2_etnlp_project/fig3a.png" title="Figure 3A: Heatmap of Retrieval Head Activations in Qwen 2.5-3B-Instruct" class="img-fluid rounded" %}
  </div>
</div>
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/2_etnlp_project/fig3b.png" title="Figure 3B: Heatmap of Retrieval Head Activations in Phi 3.5-3B-MiniInstruct" class="img-fluid rounded" %}
  </div>
</div>
<div class="caption">Shared heads dominate strong retrieval behavior. Language-specific heads appear in later transformer layers. Top: Qwen 2.5-3B-Instruct, Bottom: Phi 3.5-3B-MiniInstruct</div>

<h4>Finding 2: Strength Correlates with Generality</h4>
<p>
Strong heads (retrieval score ≥ 0.5) tend to be shared across languages. Weaker heads are often language-specific.
</p>
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/2_etnlp_project/fig4.png" title="Figure 4: Language-Specific vs Shared Heads" class="img-fluid rounded" %}
  </div>
</div>

<h4>Finding 3: Retrieval Head Similarity Tracks Language Distance</h4>
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/2_etnlp_project/fig5a.png" title="Figure 5: Pairwise Rank Correlation of Heads in Qwen 2.5-3B-Instruct" class="img-fluid rounded" %}
  </div>
</div>
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/2_etnlp_project/fig5b.png" title="Figure 5: Pairwise Rank Correlation of Heads in Qwen 2.5-3B-Instruct" class="img-fluid rounded" %}
  </div>
</div>
<div class="caption">The difference in ranks of retrieval heads is more pronounced for weaker, language-specific attention heads. Top: Qwen 2.5-3B-Instruct, Bottom: Phi 3.5-3B-MiniInstruct</div>


<div class="row" id="p2tab1">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/2_etnlp_project/tab1.png" title="Table 1: Language Distance vs Correlation" class="img-fluid rounded" %}
  </div>
</div>
<div class="caption">Higher correlation between English-German vs English-Chinese retrieval heads.</div>

<h4>Finding 4: Retrieval + Translation Fails in Hybrid Tasks</h4>
<p>
When haystack and needle are in English but response is expected in Chinese, Qwen-2.5 fails to activate retrieval heads. This suggests current methods don’t generalize well to retrieval-translation tasks.
</p>
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/2_etnlp_project/fig6.png" title="Figure 6: Retrieval-Translation Task Failures" class="img-fluid rounded" %}
  </div>
</div>

<h4>Finding 5: Masking Top Retrieval Heads Degrades All Languages</h4>
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/2_etnlp_project/tab2.png" title="Table 2: ROUGE Drop after Masking Heads" class="img-fluid rounded" %}
  </div>
</div>
<div class="caption">ROUGE scores drop more when language-agnostic heads are masked compared to language-specific heads.</div>

<h3>5. Conclusion and Future Work</h3>
<p>
We find that strong retrieval heads tend to be language-agnostic and essential across tasks. These insights can guide KV-caching and pruning strategies in multilingual systems. Future work should explore how retrieval heads emerge during training and how to adapt retrieval-translation experiments to better reflect real-world QA settings.
</p>

