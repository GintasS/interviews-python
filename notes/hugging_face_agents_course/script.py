from huggingface_hub import InterfaceClient
import os

client = InterfaceClient("meta-llama/Llama-3.3-70B-Instruct")

output = client.text_generation("Hi, how are you?")

print(output)